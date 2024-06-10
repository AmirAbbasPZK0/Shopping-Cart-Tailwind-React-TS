import { ProductData } from "../interfaces/data";
import { useNavigate } from "react-router-dom";


interface Props {
    data : ProductData
}

const Product = ({data} : Props) => {

    const navigate = useNavigate()

    return (<>
        <div onClick={()=>{
                navigate("/product/"+data.id)
            }} className="w-[240px] cursor-pointer shadow-md hover:shadow-2xl transition-all top-0 bg-transparent rounded-md h-[400px] flex items-center justify-between flex-col">
            <img className="w-[240px] top-0 h-[240px] rounded-md" src={data.imgUrl} alt={"image"} />
            <div className="flex items-start flex-col h-[50%] text-start p-1 justify-center">
                <h3 className="text-[20px]">{data.title}</h3>
                <p className="text-[40px] font-thin">{data.price}$</p>
            </div>
        </div>
    </>);
}
 
export default Product;