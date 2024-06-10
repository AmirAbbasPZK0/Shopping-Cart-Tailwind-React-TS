import { ProductData } from "../interfaces/data";
import { useDispatch } from "react-redux";
import { addToCart , removeFromCart , deleteProductFromCart } from "../context/CartReducer";

interface Props {
    data : ProductData
}

const CartProduct = ({data} : Props) => {
    
    const dispatch = useDispatch()
    
    return (<>
        <div className="flex items-center max-[600px]:flex-col max-[600px]:justify-center max-[600px]:w-[300px] justify-evenly text-start ">
            <img className="w-[150px] h-[150px]" src={data.imgUrl} alt="" />
            <h3>{data.title}</h3>
            <h3>{data.price * data.quantity}$</h3>
            <h5>{data.quantity}</h5>
            <div>
                <button onClick={()=>{
                    dispatch(addToCart(data))
                }} className="bg-slate-400 text-slate-950 w-[40px] m-2 p-2 rounded-md">+</button>
                <button onClick={()=>{
                    dispatch(removeFromCart(data))
                }} className="bg-slate-400 text-slate-950 w-[40px] m-2 p-2 rounded-md">-</button>
                <button onClick={()=>{
                    dispatch(deleteProductFromCart(data))
                }} className="bg-red-500 text-white  m-2 p-2 rounded-md">Remove</button>
            </div>
        </div>
    </>);
}
 
export default CartProduct;