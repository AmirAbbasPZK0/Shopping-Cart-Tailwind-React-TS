import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import { Provider } from 'react-redux'
import { store } from './context/store'
import Cart from './pages/Cart'

const root = ReactDOM.createRoot(document.getElementById("root")!)

const router = createBrowserRouter([
    {
        element : <App/>,
        children : [
            {
                element : <Home/>,
                path : "/"
            },
            {
                element : <ProductDetail/>,
                path : "/product/:id"
            },
            {
                element : <Cart/>,
                path : "/cart"
            }
        ]
    }
])

root.render(<>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
</>)