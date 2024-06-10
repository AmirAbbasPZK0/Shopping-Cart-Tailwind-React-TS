import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";


const Navbar = () => {

    const cartCount = useSelector((state : RootState) => state.cart.cart)

    return (<>
        <nav className="flex sticky bg-slate-900 text-white items-center justify-center top-0 h-[80px]">
            <div className="flex items-center justify-between px-[50px] mx-auto max-w-[1300px] w-[100%]">
                <Link className="text-[30px]" to={"/"}>Logo</Link>
                <ul className="flex items-center text-center list-none">
                    <li className="pl-2">
                        <Link className="text-[20px] flex flex-row" to={'/cart'}><FaCartShopping/><span>{Object.values(cartCount).length}</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>);
}
 
export default Navbar;