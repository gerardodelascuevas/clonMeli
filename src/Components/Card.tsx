import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';

const useStyles = makeStyles({
    img: {
        width: '40%',
        heigth: '200%' 
       
    }, 
    paper:{
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)',         
        maxWidth: '60%',
        alignItems: 'right', 
        backgroundColor: 'white',
        marginLeft: '20%', 
        textDecoration: 'none'
    }
})
export default function Card( { img, name, value, id }: any  ){
    const clases = useStyles()
    const isMatch = useMediaQuery('(min-width: 600px)') 

    return (
        <Link to={`/${id}`}>
            {
                !isMatch ? 
                <Paper elevation={3} style={{width: '100%', display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                    <img src={img} style={{height: '100%'}} />
                    <h3 style={{marginLeft: '-5em', fontSize: '1rem', alignItems: 'left', 
                        textDecoration: 'none'
                }}> { name } </h3>
                    <h3 style={{marginLeft: '50%', marginTop: '10%', fontSize: '1rem', alignContent: 'center'}}> <b> $ {value} </b> </h3>
                </Paper> : 

            <Paper className={clases.paper} elevation={3}>
                <img src={img} className={clases.img} />
                <h3> { name } </h3>
                <h3 style={{marginLeft: '80%', marginTop: '-2rem', display: 'flex'}}> <b> $ {value} </b></h3>
            </Paper>
            }
            
        </Link>
    )
}