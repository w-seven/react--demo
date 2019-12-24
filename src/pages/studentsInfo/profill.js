

// reducers.js

import { GET_STU_DATA, GET_TOTAL_STU_DATA } from '../actions/actionTypes'

const defaultStore = {
    userName: 'wangxiaowo',
    password: '123456',
    editing: false,
    expand: false,
    studentInfo: [
        // {
        //     key: '2019097867',
        //     studentId: '2019097867',
        //     studentName: 'wangxiaowo',
        //     department: '数理系',
        //     major: '软件工程',
        //     studentClass: '计科N181',
        //     sex: '女',
        //     idcard: '33078978297739',
        //     nation: '汉',
        //     phone: '15858456789',
        //     nativePlace: '嘉兴',
        //     homeAddress: '浙江嘉兴',
        // },
    ]
}

export default (state = defaultStore, action) => {
    // return store
    switch (action.type){
        case GET_STU_DATA:
            let newState = JSON.parse(JSON.stringify(state))
            console.log("reducer",newState)
            newState.studentInfo = action.data
            return {
                ...state,
                studentInfo: action.data
            }
        // case GET_TOTAL_STU_DATA:
        //     console.log("reducer333",state)
        //     return {
        //         ...state,
        //         total: action.data
        //     }
        default:
            return state
    }
}



// actionCreator
import { GET_DATA, GET_STU_DATA, GET_TOTAL_STU_DATA } from './actionTypes'
import axios from 'axios'

export const getDataAction = (data) => ({
    type: GET_DATA,
    data
})

export const getStudenDataAction = (data) => ({
    type: GET_STU_DATA,
    data
})

// export const getTotalStudenDataAction = (data) => ({
//     type: GET_TOTAL_STU_DATA,
//     data
// })

// 获取学生基本信息
export const getStudentInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentInfoByPage',{params}).then((res)=>{
            const data = res.data
            
            console.log("studentInfoData",data)
        }).catch((error)=>{
            console.log("getStudentInfo",error)
        })
    }
}

// 获取学生数据总数
// export const getTotalStuData = (params) => {
//     return (dispatch) => {
//         axios.get('http://10.120.137.13:8080/student/getTotalPages',{params}).then((res)=>{
//             const totalData = res.data;
//             console.log(res)
//             const action = getTotalStudenDataAction(totalData)
//             dispatch(action)
//         })
//     }
// }