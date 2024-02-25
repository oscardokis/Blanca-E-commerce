import {ChevronRightIcon} from '@heroicons/react/24/solid'

export const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  const currentDate = new Date().toDateString()

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 sm:w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">{ currentDate }</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
        </p>
      </div>
    </div>
  )
}
