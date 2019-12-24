import { GET_STU_DATA, ADD_STU_DATA, GET_STU_A_DATA, GET_STU_ANOMIE_DATA, GET_STU_LEARN_D_DATA, GET_STU_MINORITY_DATA, GET_STU_HAS_RELIGION_DATA } from '../actions/actionTypes'

const defaultStore = {
    userName: 'wangxiaowo',
    password: '123456',
    editing: false,
    expand: false,
    modal2Visible: false,
    Modal1Visible: false,
    visible: false,
    studentInfo: [],
    studenALeveltInfo: [],
    studenAnomietInfo: [],
    studenLearnDifftInfo: [],
    studenMinoritytInfo: [],
    studenHasReligionInfo: []
}

export default (state = defaultStore, action) => {
    // return store
    switch (action.type) {
        case GET_STU_DATA:
            let newState = JSON.parse(JSON.stringify(state))
            console.log("reducer", newState)
            newState.studentInfo = action.data
            return {
                ...state,
                studentInfo: action.data
            }
        case ADD_STU_DATA:
            let addState = JSON.parse(JSON.stringify(state))
            console.log("reducer", addState)
            addState.studentInfo.push(action.data)
            return {
                ...state,
                // studentInfo: addState.studentInfo
            }
        case GET_STU_A_DATA:
            return {
                ...state,
                studenALeveltInfo: action.data
            }
        case GET_STU_LEARN_D_DATA:
            return {
                ...state,
                studenLearnDifftInfo: action.data
            }
        case GET_STU_ANOMIE_DATA:
            return {
                ...state,
                studenAnomietInfo: action.data
            }
        case GET_STU_MINORITY_DATA:
            return {
                ...state,
                studenMinoritytInfo: action.data
            }
        case GET_STU_HAS_RELIGION_DATA:
            return {
                ...state,
                studenHasReligionInfo: action.data
            }
        default:
            return state
    }
}