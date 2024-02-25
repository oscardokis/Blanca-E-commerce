import { useContext } from "react"
import { Link } from "react-router-dom"

import LayOut from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"

function MyOrders() {
  const { order } = useContext(ShoppingCartContext)
  return (
    <LayOut>
      <div className=" flex sm:w-80 items-center justify-center relative">
        <h1 className="font-medium text-xl mb-4">MyOrders</h1>
      </div>
      
      {
        order.map((order, index) => (
          <Link 
            to={`/my-orders/${index}`}
            key={index}
            >
            <OrdersCard
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>
        ))
      }
    </LayOut>
  )
}

export default MyOrders