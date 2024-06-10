import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import { cartRefreshHandler } from "./context/CartReducer";


const App = () => {

    const dispatch = useDispatch()

    let cartData = JSON.parse(localStorage.getItem("cart")!)

    if(cartData !== null){
        dispatch(cartRefreshHandler(cartData))
    }

    return (<>
        <Navbar/>
        <Outlet/>
    </>);
}
 
export default App 