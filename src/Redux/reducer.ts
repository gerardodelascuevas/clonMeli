const initialState = {
    theProduct: [], 
}
export default function rootReducer(state = initialState, action: any){
    switch(action.type){
        case "GET_THE_PRODUCT": 
            return{
                ...state, 
                theProduct: action.payload
            }


        default: 
        return state
    }
}