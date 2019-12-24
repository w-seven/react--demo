import { GET_DATA, GET_STU_DATA, ADD_STU_DATA, GET_STU_A_DATA, GET_STU_ANOMIE_DATA, GET_STU_LEARN_D_DATA,GET_STU_HAS_RELIGION_DATA,GET_STU_MINORITY_DATA } from './actionTypes'
import axios from 'axios'

export const getDataAction = (data) => ({
    type: GET_DATA,
    data
})

export const getStudenDataAction = (data) => ({
    type: GET_STU_DATA,
    data
})
export const addStudenDataAction = (data) => ({
    type: ADD_STU_DATA,
    data
})
export const getStudenALevelDataAction = (data) => ({
    type: GET_STU_A_DATA,
    data
})
export const getStudenLearnDiffDataAction = (data) => ({
    type: GET_STU_LEARN_D_DATA,
    data
})
export const getStudenAnomieDataAction = (data) => ({
    type: GET_STU_ANOMIE_DATA,
    data
})
export const getMinorityStudenDataAction = (data) => ({
    type: GET_STU_MINORITY_DATA,
    data
})
export const getStudenHasReligionDataAction = (data) => ({
    type: GET_STU_HAS_RELIGION_DATA,
    data
})

// 获取学生基本信息
export const getStudentInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentInfoByPage',{params}).then((res)=>{
            console.log("get",res)
            const data = res.data
            const action = getStudenDataAction(data)
            dispatch(action)
            console.log("studentInfoData",data)
        }).catch((error)=>{
            console.log("getStudentInfo",error)
        })
    }
}

// 增加学生基本信息数据
export const addStudentInfo = (params) => {
    return (dispatch) => {
        axios.post('http://10.120.137.13:8080/student/addStudent',{params}).then((res)=>{
            console.log("post",res)
            const data = res.data
            const action = addStudenDataAction(data)
            dispatch(action)
            console.log("addstudentInfoData",res)
        }).catch((error)=>{
            console.log("addstudentInfoData",error)
        })
    }
}

// 获取A类贫困生数据
export const getStudentALevelInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentALevelPoorByPage',{params}).then((res)=>{
            console.log("ooooooooooo",res)
            const data = res.data
            const action = getStudenALevelDataAction(data)
            dispatch(action)
            console.log("getStudenALevelDataAction",res)
        }).catch((error)=>{
            console.log("getStudenALevelDataAction",error)
        })
    }
}

// 获取学困生信息
export const getStudentLearnDiffInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentDifficultByPage',{params}).then((res)=>{
            const data = res.data
            const action = getStudenLearnDiffDataAction(data)
            dispatch(action)
            console.log("getStudenLearnDiffDataAction",res)
        }).catch((error)=>{
            console.log("getStudenLearnDiffDataAction",error)
        })
    }
}


// 获取行为失范学生的信息
export const getStudentAnomieInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentBehaviornomieByPage',{params}).then((res)=>{
            const data = res.data
            const action = getStudenAnomieDataAction(data)
            dispatch(action)
            console.log("getStudenAnomieDataAction",res)
        }).catch((error)=>{
            console.log("getStudenAnomieDataAction",error)
        })
    }
}

// 获取少数民族学生的信息
export const getMinorityStudentInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentBehaviornomieByPage',{params}).then((res)=>{
            const data = res.data
            const action = getMinorityStudenDataAction(data)
            dispatch(action)
            console.log("getMinorityStudenDataAction",res)
        }).catch((error)=>{
            console.log("getMinorityStudenDataAction",error)
        })
    }
}

// 获取有宗教信仰学生的信息
export const getStudentHasReligionInfo = (params) => {
    return (dispatch) => {
        axios.get('http://10.120.137.13:8080/student/getStudentRegionByPage',{params}).then((res)=>{
            const data = res.data
            const action = getStudenHasReligionDataAction(data)
            dispatch(action)
            console.log("getStudenHasReligionDataAction",res)
        }).catch((error)=>{
            console.log("getStudenHasReligionDataAction",error)
        })
    }
}
