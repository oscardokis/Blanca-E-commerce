import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

import {XMarkIcon} from '@heroicons/react/24/solid'

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow} = useContext(ShoppingCartContext)
  return (
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
        <XMarkIcon
         className='h-6 w-6 text-black cursor-pointer'
         onClick={closeProductDetail}/>
        </div>
      </div>
      <figure className='px-6'>
        <img className='h-full w-full rounded-lg' 
        src={productToShow.images?.[1]} 
        alt={productToShow.title}/>
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>$ {productToShow.price}</span>
        <span className='font-medium text-md'>{productToShow.title}</span>
        <span className='font-light text-xs'>{productToShow.description}</span>

      </p>
    </aside>
  )
}

export default ProductDetail
