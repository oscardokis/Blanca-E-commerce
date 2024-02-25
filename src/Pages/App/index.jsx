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
    {path:'/Blanca-E-commerce/', element:<Home />},
    {path:'/Blanca-E-commerce/clothes', element:<Home />},
    {path:'/Blanca-E-commerce/electronics', element:<Home />},
    {path:'/Blanca-E-commerce/furnitures', element:<Home />},
    {path:'/Blanca-E-commerce/shoes', element:<Home />},
    {path:'/Blanca-E-commerce/miscellaneous', element:<Home />},
    {path:'/Blanca-E-commerce/clothes', element:<Home />},
    {path:'/Blanca-E-commerce/my-order', element:<MyOrder />},
    {path:'/Blanca-E-commerce/my-orders', element:<MyOrders />},
    {path:'/Blanca-E-commerce/my-orders/last', element:<MyOrder />},
    {path:'/Blanca-E-commerce/my-orders/:id', element:<MyOrder />},
    {path:'/Blanca-E-commerce/my-account', element:<MyAccount />},
    {path:'/Blanca-E-commerce/sign-in', element:<SignIn />},
    {path:'/Blanca-E-commerce/sign-up', element:<SignUp />},
    {path:'/Blanca-E-commerce/log-out', element:<Logout />},
    {path:'/Blanca-E-commerce/*', element:<NotFound />}, // Cualquier otra ruta que no tengas va salir esta pagina y se representa con un /*
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
