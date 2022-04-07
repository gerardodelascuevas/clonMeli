import { ImageListItem, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import  logo  from '../img/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles({
    nav: {
        backgroundColor: '#FFF159', 
        height: '4rem', 
        padding: '1rem'    
    }, 
    input: {
        width: '40%',
        height: '2.4rem',
        backgroundColor: 'white',
        marginBottom: '115%', 
        marginLeft: '0',
        borderRadius: '3px', 
    }, 
    img: {
        width: '8rem', 
        marginLeft: '-25%', 
        marginTop: '1rem'
    }, 
    location: {
        marginTop: '-245vh',
        marginRight: '60%',

    }, 
    span: {
        marginLeft: '-8rem'
    }
})

export default function Navbar(){
    const clases = useStyles()
    return (
        <div className={clases.nav}>
            <Input className={clases.input} placeholder='Buscar productos, marcas y más... '/>
             <div className={clases.location}>
                <img src={logo} className={clases.img}/> 
                <div className={clases.span}>        
                    <LocationOnIcon />
                    <span >  Ingresa tu Código Postal </span>
                    
                </div>   
                
            </div> 
          
        </div>
    )
}