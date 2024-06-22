import { useState } from "react";
import { BASE_URL } from "../utilities/api";
import { ProductData } from "../interfaces/data";


const useAsync = (innerUrl : string , method : string) => {
    
    const [data , setData] = useState<ProductData[]>([])
    const [detailData , setDetailData] = useState<ProductData>({
        title : "",
        description : "",
        price : 0,
        imgUrl : "",
        id : 0,
        quantity : 0
    })
    const [error , setError] = useState<null | string>(null)
    const [loading , setLoading] = useState(true)

    const run = () => {
        fetch(BASE_URL + innerUrl , {method})
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                setError("Error")
            }
        })
        .then((data : any) => {
            setData(data)
            setLoading(false)
            setDetailData(data)
        })
        .catch(err => {
            setError(err)
            setLoading(false)
        })
    }

    return {run , error , detailData , data , loading}

}
 
export default useAsync;