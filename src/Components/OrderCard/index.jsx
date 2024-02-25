import {XMarkIcon} from '@heroicons/react/24/solid'

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete} = props

  return (
    <div className="flex justify-between items-center mb-3 w-full">
      <div className='flex items-center gap-1'>
        <figure className='w-12 h-12'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='font-light w-24 h-12 text-xs overflow-hidden'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-sm font-medium'>${price}</p>
        {handleDelete && (
          <XMarkIcon
          className='h-5 w-5 text-black cursor-pointer'
          onClick={() => handleDelete(id)}
          />
        )}
      </div>
    </div>
  )
}
export default OrderCard