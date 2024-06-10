import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import CartProduct from "../components/CartProduct";


const Cart = () => {

    const data = useSelector((state : RootState)=> state.cart.cart)

    const calcTotalCast = () => {
        let result = 0
        Object.values(data).map(item => {
            result += item.quantity * item.price
        })
        return result
    }

    return (<>
        <div className="flex flex-col gap-[10px] p-4">
            {Object.values(data).length === 0 ? (
                <div className="h-[84vh] flex items-center justify-center">
                    <h2>Basket is Empty</h2>
                </div>
            ) : (
                <div>
                    <div className=" p-2 gap-[40px]">
                        {Object.values(data).map((item , index)=>(
                            <CartProduct data={item} key={index}/>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-[30px]">Total : {calcTotalCast()}$</h3>
                    </div>
                </div>
            )}
        </div>
    </>);
}
 
export default Cart;