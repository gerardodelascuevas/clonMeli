import axios from 'axios'

export function getProducts(search: string){
    return async function (dispatch: Function){
        try{
        const theProduct = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`) 
            return dispatch({
                type: 'GET_THE_PRODUCT', 
                payload: theProduct.data
            })
        }catch(e) { console.log(e) }
    }
}