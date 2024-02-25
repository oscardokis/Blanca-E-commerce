import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'

import './styles.css'

import {XMarkIcon} from '@heroicons/react/24/solid'

const CheckOutSideMenu = () => {
  const { 
    isCheckOutSideMenu,
    closeCheckOutSideMenu, 
    cartProducts, 
    setCartProducts, 
    order, 
    setOrder,
    count,
    setCount
  } = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCount(count - 1)
    setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.23',
      products: cartProducts,
      totalProducts:cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd])
    setCartProducts([])
    setCount(0)
  }
  return (
    <aside className={`${isCheckOutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
        <XMarkIcon
         className='h-6 w-6 text-black cursor-pointer'
         onClick={closeCheckOutSideMenu}/>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          cartProducts.map((product) => 
            (<OrderCard
              title = {product.title}
              imageUrl = {product.images[0]}
              price = {product.price}     
              key = {product.id}
              id = {product.id}
              handleDelete = {handleDelete}
            />)
          )
        }
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light text-xl'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button 
            className='bg-black w-full py-3 text-white rounded-lg'
            onClick={() => handleCheckout()}>
              Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckOutSideMenu
