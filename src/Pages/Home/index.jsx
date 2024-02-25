import { useContext } from "react"
import LayOut from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
function Home() {
  const { searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        <div className="grid gap-x-3 gap-y-3 sm:gap-y-9 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 justify-items-center w-full max-w-screen-lg p-6">
          {
            filteredItems?.map(item => (
              <Card key={item.id} data={item} />
          ))}
        </div>
      )
    } else {
      return (
        <div>We do not have anything with that search</div>
      )
    }
  }
  return (
    <LayOut>
      <div className=" flex sm:w-80 items-center justify-center relative">
        <h1 className="font-medium text-2xl mb-4">Exclusive Products</h1>
      </div>
      <input 
        type="text" 
        placeholder='Search a product'
        className="rounded-lg border border-black sm:w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => {setSearchByTitle(e.target.value)}}
        value={searchByTitle} />
        {renderView()}

      <ProductDetail />
    </LayOut>
  )
}

export default Home