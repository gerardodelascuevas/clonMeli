import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
        marginLeft: '20%'
    }
})
export default function Card( { img, name, value }: any  ){
    const clases = useStyles()

    return (
        <Paper className={clases.paper} elevation={3}>
            <img src={img} className={clases.img} />
            <h3> { name } </h3>
            <h3 style={{marginLeft: '80%', marginTop: '-2rem', display: 'flex'}}> <b> $ {value} </b></h3>
        </Paper>
    )
}