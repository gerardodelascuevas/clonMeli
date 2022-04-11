import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from "../Redux/actions";
import { useEffect } from "react";


export default function Detail(){
    const id = useParams()
    const theId: any = id.product
    const dispatch = useDispatch()

    useEffect(()=> {
          dispatch(getDetail(theId))
    }, [])

    const { detail }: any = useSelector(state=> state)
    console.log(detail)
    
    return (
        <div>

        </div>
    )
}