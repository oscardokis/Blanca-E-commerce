import { useContext } from 'react'

import {PlusIcon} from '@heroicons/react/24/solid'
import {CheckIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({data}) => {
  const {
    count, 
    setCount, 
    openProductDetail, 
    setProductToShow, 
    cartProducts, 
    setCartProducts,
    openCheckOutSideMenu,
    closeProductDetail,
    closeCheckOutSideMenu
  } = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    closeCheckOutSideMenu()
    openProductDetail()
    setProductToShow(productDetail)
  }
  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    setCount(count + 1)
    setCartProducts([...cartProducts, productData])
    closeProductDetail()
    openCheckOutSideMenu()
  }
  const handleDelete = (event, id) => {
    event.stopPropagation()
    setCount(count - 1)
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filteredProducts)
    closeProductDetail()
    openCheckOutSideMenu()
  }
  const renderIcon = (id) => {
    const isIncard = cartProducts.filter((product) => product.id === id).length > 0
    if(isIncard) {
      return (
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-black  w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => handleDelete(event, id)}
        >
          <CheckIcon className='h-6 w-6 text-white'/>
        </div>
      )
    }else{
      return (
        <div 
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
          >
          <PlusIcon className='h-6 w-6 text-black'/>
        </div>
      )
    }

  }
  return(
    <div 
    className="bg-white cursor-pointer sm:w-64 h-72 md:w-40 md:h-48 rounded-lg" 
    onClick={() => showProduct(data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.images[0]} alt={data.title} />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  )
}

export default Card