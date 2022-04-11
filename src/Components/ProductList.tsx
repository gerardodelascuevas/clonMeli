import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'
import { useMediaQuery } from '@mui/material';

export default function ProductList(search: any){
    const isMatch = useMediaQuery('(min-width: 600px)') 
    console.log(isMatch)
    const { theProduct }: any = useSelector(state=> state)

    let theProduct2 = theProduct.results || []

    return(
        <div style={{alignContent: 'rigth',
            backgroundColor: 'rgb(208, 209, 205)', 
        }}>

            { isMatch ?
                <div>
 {
                theProduct2.length > 0 ? 
                theProduct2.map((x: any)=> {
                     return <div>
                        <Card style={{maxWidth: '60%'}}
                             img={x.thumbnail}
                              name={x.title}
                             value={x.price}
                             id={x.id}
                         />                       
                    </div>
                
                }) : <h1> Ingresa una busqueda </h1>
            }

                </div> : 
                         <div>
                         {
                                        theProduct2.length > 0 ? 
                                        theProduct2.map((x: any)=> {
                                             return <div>
                                                <Card style={{width: '100vh'}}
                                                     img={x.thumbnail}
                                                      name={x.title}
                                                     value={x.price}
                                                     id={x.id}
                                                 />                                              
                                            </div>
                                        
                                        }) : <h1> Ingresa una busqueda </h1>
                                    }
                        
                                        </div>
            
            }
            
           
        </div>
    )
}