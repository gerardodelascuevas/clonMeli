const initialState = {
    theProduct: [], 
    detail: []
}
export default function rootReducer(state = initialState, action: any){
    switch(action.type){
        case "GET_THE_PRODUCT": 
            return{
                ...state, 
                theProduct: action.payload
            }
        case "GET_DETAILS":         
            return {
                ...state, 
                detail: action.payload
            }


        default: 
        return state
    }
}