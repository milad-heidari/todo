const initState = {
    tasks:[],
    modalVisiblity:false,
    dataForModal:{}
}

const reducer = (state= initState,action)=>{
    let newState = state

    switch (action.type) {
        case "ADD_TASK":
            newState = {...state,tasks:[...state.tasks,action.payload]}
            break;
        case "UPDATED_TASKS":
            newState = {...state,tasks:action.payload}
            break;
            case "GET_INIT_DATA":
            // console.log('INIT',action.payload)
            newState = {...state,tasks:action.payload}
            break;
            case 'SET_MODAL_VISIBILITY':
                newState = {...state,modalVisiblity:action.payload}
            break;
        case "SET_DATA_FOR_MODAL":
                newState = {...state,dataForModal:action.payload}
            break;
        default:
            break;
    }
    // console.log('INIdfasdfaT',newState)
    return newState
}

export default reducer