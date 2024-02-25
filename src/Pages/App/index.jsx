//PASO 1 Instalar con npm i react-router-dom
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import MyAccount from '../MyAccount'
import SignIn from '../SignIn'
import SignUp from '../../Components/SignUp'
import Logout from '../../Components/Logout'
import NotFound from '../NotFound'
import { NavBar } from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './App.css'

//PASO 2 Crear la funcion AppRoutes 
const AppRoutes = () => {
  //PASO 3 USAR useRoutes va a tener un array y por dentro va a tener un objeto en el cual se escribe el PATH y el ELEMENT
  let routes = useRoutes([
    {path:'/', element:<Home />},
    {path:'/clothes', element:<Home />},
    {path:'/electronics', element:<Home />},
    {path:'/furnitures', element:<Home />},
    {path:'/shoes', element:<Home />},
    {path:'/miscellaneous', element:<Home />},
    {path:'/clothes', element:<Home />},
    {path:'/my-order', element:<MyOrder />},
    {path:'/my-orders', element:<MyOrders />},
    {path:'/my-orders/last', element:<MyOrder />},
    {path:'/my-orders/:id', element:<MyOrder />},
    {path:'/my-account', element:<MyAccount />},
    {path:'/sign-in', element:<SignIn />},
    {path:'/sign-up', element:<SignUp />},
    {path:'/log-out', element:<Logout />},
    {path:'/*', element:<NotFound />}, // Cualquier otra ruta que no tengas va salir esta pagina y se representa con un /*
    ])
  return routes
}

const App = () => {
  return (
    //PASO 4 usar el BrowserRouter como componente y dento poner la funcion AppRoutes creada en el paso 2
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
