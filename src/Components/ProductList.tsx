import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'

export default function ProductList(search: any){

    const { theProduct }: any = useSelector(state=> state)

    let theProduct2 = theProduct.results || []
    console.log(theProduct2)

    return(
        <div style={{alignContent: 'rigth',
            backgroundColor: 'rgb(208, 209, 205)', 
        }}>
            
            {
                theProduct2.length > 0 ? 
                theProduct2.map((x: any)=> {
                     return <div>
                        <Card style={{maxWidth: '60%'}}
                             img={x.thumbnail}
                              name={x.title}
                             value={x.price}
                         />
                        {/* <h4> {x.id} </h4>
                        <img src={x.thumbnail} alt={x.title} />
                        <h5> {x.title} </h5>
                        <h6> $ {x.price} </h6> */}
                    </div>
                
                }) : <h1> Ingresa una busqueda </h1>
            }

        </div>
    )
}