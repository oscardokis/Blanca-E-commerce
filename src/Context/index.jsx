import { createContext, useEffect, useState } from 'react'
import { useFilters } from '../Hooks/useFilters'
import { useLocalStorage } from '../Hooks/useLocalStorage'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping cart Increment quantity
  const [count, setCount] = useState(0)

  // Product Detail Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  // Checkout Side Menu Open / Close
  const [isCheckOutSideMenu, setIsCheckOutSideMenu] = useState(false)
  const openCheckOutSideMenu = () => setIsCheckOutSideMenu(true)
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenu(false)

  // Product Detail Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping Cart add products to cart
  const [cartProducts, setCartProducts] = useState([])

  //Shopping Cart Order
  const [order, setOrder] = useState([])

  // Get Products
  const [items, setItems] = useState(null)

  // Get Products by title
  const [searchByTitle, setSearchByTitle] = useState("")
  
  // Get Products by Category
  const [searchByCategory, setSearchByCategory] = useState("all")

  useEffect(() => {
    const dataFetch = async () => {
      try{
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await response.json()
        setItems(data)
      }catch(e){
        console.log("Error Fetching data", e)
      }
    }
    dataFetch()
  }, [])
  
  const {filterProducts, setFilters } = useFilters()
  const filteredItems =filterProducts(items)
  useEffect(()=> {
    setFilters({
      category:searchByCategory,
      search:searchByTitle
    })
  }, [searchByTitle, searchByCategory, setFilters])

  //Local storage account React Hook
  const [account, setAccount]  = useLocalStorage("account", [])
  const [ signOut, setSignOut ] = useLocalStorage("sign-out", false)


  //current User
  const[userOn, setUserOn] = useState({name:null, email:null, password:null})

  //toggle nav bar for responsive design
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);

  return(
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      isCheckOutSideMenu,
      setIsCheckOutSideMenu,
      openCheckOutSideMenu,
      closeCheckOutSideMenu,
      order,
      setOrder,
      items,
      setItems,
      searchByTitle,
      setSearchByTitle,
      filteredItems,
      searchByCategory,
      setSearchByCategory,
      account,
      setAccount,
      signOut,
      setSignOut,
      userOn,
      setUserOn,
      isActiveMenu,
      setIsActiveMenu,
      isActiveUser,
      setIsActiveUser
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
