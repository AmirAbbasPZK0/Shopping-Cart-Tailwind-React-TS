import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import { useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { addToCart , removeFromCart } from "../context/CartReducer";
import { RootState } from "../context/store";

const ProductDetail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {detailData , error , loading , run} = useAsync(`products/${id}` , "GET")

    useEffect(()=>{
        run()
    },[])

    const product = useSelector((state : RootState)=> state.cart.cart[detailData.id])

    if(loading)
        return <div>Loading..</div>

    if(error)
        return <div>{error}</div>

    return (<>
        <div className="h-[88vh] max-[600px]:flex-col flex items-center justify-evenly">
            <img className="w-[400px] max-[600px]:w-[200px] max-[600px]:h-[200px] rounded-md h-[400px]" src={`../${detailData?.imgUrl}`} alt="" />
            <div className="flex w-[300px] flex-col p-3">
                <h2 className="text-[30px] max-[600px]:text-[20px]">{detailData?.title}</h2>
                <h5 className="text-[16px] max-[600px]:text-[20px]">{detailData?.description}</h5>
                <span className="text-[40px] font-thin">{detailData?.price}$</span>
                <div>
                    {!product ? (<div>
                        <button onClick={()=>{
                            dispatch(addToCart(detailData))
                        }} className="bg-slate-800 p-2 m-3 rounded-md text-white">Add To Cart</button>
                    </div>) : (
                        <div>
                            <button className="bg-slate-900 m-2 p-2 w-[60px] rounded-md text-white" onClick={()=>{
                                dispatch(addToCart(detailData))
                            }}>+</button>
                            <span>{product.quantity} / {product.quantity * product.price}$</span>
                            <button className="bg-slate-900 m-2 p-2 w-[60px] rounded-md text-white" onClick={()=>{
                                dispatch(removeFromCart(detailData))
                            }}>-</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>);
}
 
export default ProductDetail;