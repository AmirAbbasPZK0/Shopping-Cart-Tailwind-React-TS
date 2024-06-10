import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import Product from "../components/Product";

const Home = () => {

    const {data , loading , error , run} = useAsync("products?offset=0&limit=60" , "GET")

    useEffect(()=>{
        run()
    },[])

    if(loading)
        return <div>Loading..</div>

    if(error)
        return <div>{error}</div>

    return (<>
        <div className="flex items-center flex-col justify-center p-[20px]">
            <h3 className="text-[40px]">Products</h3>
            <div className="flex flex-wrap items-center justify-center gap-6 p-[10px]">
                {data?.map((item , index) => (
                    <Product key={index} data={item}/>
                ))}
            </div>
        </div>
    </>);
}
 
export default Home;