import { useContext } from "react"
import { Link } from "react-router-dom"

import LayOut from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { ShoppingCartContext } from "../../Context"

import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { totalPrice } from "../../utils"


function MyOrder() {
  const {order} = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = order?.length - 1
  return (
    <LayOut >
      <div className=" flex sm:w-80 w-44 items-center justify-center relative mb-6">
        <Link to='/my-orders' className="absolute left-0">
        <ChevronLeftIcon
          className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className='flex flex-col sm:w-80'>
          {
            order?.[index]?.products.map((product) => 
              (< OrderCard
                key = {product.id}
                id = {product.id}
                title = {product.title}
                imageUrl = {product.images[0]}
                price = {product.price}     
              />)
            )
          }
      </div>
      <div className='flex justify-between items-center mb-2 sm:w-80 w-44'>
          <span className='font-light text-xl'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(order?.[index]?.products)}</span>
      </div>
    </LayOut>
  )
}

export default MyOrder