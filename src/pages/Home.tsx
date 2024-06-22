import { useEffect, useState } from "react";
import useAsync from "../hooks/useAsync";
import Product from "../components/Product";
import { ProductData } from "../interfaces/data";

const Home = () => {

    const {data , loading , error , run} = useAsync("products?offset=0&limit=60" , "GET")
    const [FData , setFData] = useState<ProductData[]>([])

    useEffect(()=>{
        run()
    },[])

    useEffect(()=>{
        setFData(data)
    },[data])

    console.log(data)

    if(loading)
        return <div>Loading..</div>

    if(error)
        return <div>{error}</div>

    const upperFilterHandler = (target : number) => {
        if(FData === null){
            setFData(data)
        }
        setFData(data?.filter(item => item.price >= target))
    }

    return (<>
        <div className="flex items-center flex-col justify-center p-[20px]">
            <h3 className="text-[40px]">Products</h3>
            <input min={115} max={260} onChange={e=>{
                upperFilterHandler(parseInt(e.target.value))
            }} type="range"/>
            <div className="flex flex-wrap items-center justify-center gap-6 p-[10px]">
                {FData?.map((item , index) => (
                    <Product key={index} data={item}/>
                ))}
            </div>
        </div>
    </>);
}
 
export default Home;