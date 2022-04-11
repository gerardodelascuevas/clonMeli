import { useState } from 'react';
import { ImageListItem, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import  logo  from '../img/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/actions';
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useMediaQuery } from '@mui/material';


const useStyles = makeStyles({
    nav: {
       backgroundColor: '#FFF159',        
        height: '5rem', 
        padding: '1rem',
        boxShadow: 'lg', 
        maxWidth: '100%',   
        display: 'flex' 
    }, 
    input: {
         width: '40%',
         height: '2.4rem',
         backgroundColor: 'white',        
    }, 
    img: {
         width: '8rem', 
    }, 
    location: {

    }, 
    span: {
        "&:hover":{
            cursor: 'pointer'
        }
    }, 
    search: {
         backgroundColor: 'white', 
         borderRadius: '4px',      
            "&:hover":{
                cursor: 'pointer'
            }
    }, 
    cart: {
        marginTop: '2%'
    }
    
})

export default function Navbar(){
    const clases = useStyles()
   
    const isMatch = useMediaQuery('(min-width: 992px)') 

    const dispatch = useDispatch()

    const [input, setInput] = useState('')
    const handleChange = (e: any)=> {
        setInput(e)
    }   


    const handleAskProduct = (input: any)=> {
        dispatch(getProducts(input))       
    }

    return (
        <div >    

      { !isMatch ? 
        <div className={clases.nav}>     
        <div className={clases.location}>
           <img src={logo} className={clases.img}/> 
           <div style={{marginLeft: '-4rem'}}>
           <div className={clases.span}>        
               <LocationOnIcon style={{color: 'gray', marginLeft: '0.5rem'}}/>                    
               <span style={{color: 'black', fontSize:'12px'}}>  Ingresa tu <br/> Código Postal </span>
               </div>
              
           </div>   
           
       </div> 
       <Input 
       style={{width: '60%'}}
       onChange={e=> handleChange(e.target.value)} className={clases.input} placeholder='Buscar productos, marcas y más... '/>
       <form onSubmit={()=> handleAskProduct(input)}> 
       <SearchIcon onClick={()=> handleAskProduct(input)} className={clases.search} style={{height: '2.4rem', }}/>           
       </form>
      {/* <DraftsIcon  style={{color: 'gray'}}/>            
      <span style={{color: 'gray'}}> Novedades de temporada a un click </span>
      
       <div className={clases.cart}  style={{display: 'flex'}}>               
          <span style={{margin: '0.5rem'}}> Crea tu cuenta </span>
          <span style={{margin: '0.5rem'}}> Ingresa </span>
          <span style={{margin: '0.5rem'}}> Mis compras </span>
          <AiOutlineShoppingCart style={{margin: '0.5rem'}} />

      </div> */}
      
   </div>  
        :   <div className={clases.nav}>     
             <div className={clases.location}>
                <img src={logo} className={clases.img}/> 
                <div style={{marginLeft: '-4rem'}}>
                <div className={clases.span}>        
                    <LocationOnIcon style={{color: 'gray'}}/>                    
                    <span style={{color: 'black', fontSize:'12px'}}>  Ingresa tu <br/> Código Postal </span>
                    </div>
                   
                </div>   
                
            </div> 
            <Input onChange={e=> handleChange(e.target.value)} className={clases.input} placeholder='Buscar productos, marcas y más... '/>
            <form onSubmit={()=> handleAskProduct(input)}> 
            <SearchIcon onClick={()=> handleAskProduct(input)} className={clases.search} style={{height: '2.4rem', }}/>           
            </form>
            <DraftsIcon  style={{color: 'gray'}}/>            
           <span style={{color: 'gray'}}> Novedades de temporada a un click </span>
           
           <div className={clases.cart}  style={{display: 'flex'}}>               
               <span style={{margin: '0.5rem'}}> Crea tu cuenta </span>
               <span style={{margin: '0.5rem'}}> Ingresa </span>
               {/* <span style={{margin: '0.5rem'}}> Ingresa </span> */}
               <span style={{margin: '0.5rem'}}> Mis compras </span>
               <AiOutlineShoppingCart style={{margin: '0.5rem'}} />

           </div>
           
        </div>
      }
        </div>
    )
}