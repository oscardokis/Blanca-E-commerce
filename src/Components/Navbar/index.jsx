import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import {Bars4Icon} from '@heroicons/react/24/solid'
import {UserIcon} from '@heroicons/react/24/solid'

export const NavBar = () => {
  const {
    count, 
    setSearchByCategory, 
    setSearchByTitle, 
    signOut, 
    setSignOut, 
    userOn, 
    openCheckOutSideMenu,
    isCheckOutSideMenu,
    setIsCheckOutSideMenu,
    isActiveMenu,
    setIsActiveMenu,
    isActiveUser,
    setIsActiveUser
  } = useContext(ShoppingCartContext)

  const  activeStyle = 'underline underline-offset-4'
  const handleButtonMenu = () => {
    setIsActiveUser(false)
    setIsActiveMenu(!isActiveMenu)
  }
  const handleButtonUser = () => {
    setIsActiveMenu(false)
    setIsActiveUser(!isActiveUser)
  }
  const handleSignOut = () => {
    setSignOut(false)
  }
  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-2.5 px-3 sm:px-8 text-sm font-light bg-white">
      <button className="md:hidden flex w-6 h-6" onClick={() => handleButtonMenu()}><Bars4Icon/></button>
      <ul className={`${isActiveMenu ? 'flex flex-col absolute top-12 right-3 bg-white rounded-lg border border-black p-6 w-11/12':'hidden'} md:flex items-center gap-3`}>
        <li 
          className="font-semibold text-lg"
          onClick={() => {
            setIsActiveMenu(false)
            setIsActiveUser(false)
            setSearchByTitle("")
            setSearchByCategory("all")
          }}
        >
          <NavLink
            to='/Blanca-E-commerce/'>
              Blanca
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() => {
              setSearchByCategory("all")
              setSearchByTitle("")
              setIsActiveMenu(false)
              setIsActiveUser(false)
            }}
            >
              All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/clothes'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() => 
              {
              setSearchByCategory("clothes")
              setSearchByTitle("")
              setIsActiveMenu(false)
              setIsActiveUser(false)
              }
            }
            >
              Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/electronics'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() => {
              setSearchByCategory("electronics")
              setSearchByTitle("")
              setIsActiveMenu(false)
              setIsActiveUser(false)
            }}
            >
              Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/furnitures'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() => {
              setSearchByTitle("")
              setSearchByCategory("furniture")
              setIsActiveMenu(false)
              setIsActiveUser(false)
            }}
            >
              Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/miscellaneous'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() => {
              setSearchByTitle("")
              setSearchByCategory("miscellaneous")
              setIsActiveMenu(false)
              setIsActiveUser(false)
            }}
            >
              Miscellaneous
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/shoes'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() =>{
              setSearchByTitle("")
              setSearchByCategory("shoes")
              setIsActiveMenu(false)
              setIsActiveUser(false)
            }}
            >
              Shoes
          </NavLink>
        </li>

      </ul>
      <h2 className="font-semibold text-2xl md:hidden">
          <NavLink
            to='/Blanca-E-commerce'
            onClick={() =>{
              setSearchByTitle("")
              setSearchByCategory("all")
              }}>
              Blanca
          </NavLink>
      </h2>
      <div className="flex gap-1 justify-center items-center">
        <button className="md:hidden flex w-5 h-5" onClick={() =>handleButtonUser()}><UserIcon/></button>
        <button 
          className="md:hidden flex w-6 h-6 items-center"             
          onClick={() =>{
            setIsCheckOutSideMenu(!isCheckOutSideMenu)
            setIsActiveMenu(false)
            setIsActiveUser(false)
          }}>
          <ShoppingBagIcon className=' text-black'/>
          <div className="">{count}</div>
        </button>
      </div>
        {!signOut ? (
          <ul className={`${isActiveUser ? 'flex flex-col absolute top-12 right-3 bg-white rounded-lg border border-black p-6 w-11/12':'hidden'} md:flex items-center gap-3`}>
            <li>
              <NavLink
                to='/Blanca-E-commerce/sign-in'
                className={({ isActive }) => 
                isActive ? activeStyle : undefined
                }
                onClick={() => {
                  setIsActiveMenu(false)
                  setIsActiveUser(false)
                }}
                >
              Sign In
              </NavLink>
            </li>
          </ul>
        
        ):(
          <ul className={`${isActiveUser ? 'flex flex-col absolute top-12 right-3 bg-white rounded-lg border border-black p-6 w-11/12':'hidden'} md:flex items-center gap-3`}>
            <li 
              className="text-black/60 font-semibold"
              onClick={() => {
              setIsActiveMenu(false)
              setIsActiveUser(false)
            }}>
            <NavLink
              to='/Blanca-E-commerce'>
                {userOn.name}
            </NavLink>
            </li>
            <li>
              <NavLink
               to='/Blanca-E-commerce/my-orders'
               className={({ isActive }) => 
                 isActive ? activeStyle : undefined}
                onClick={() => {
                  setIsActiveMenu(false)
                  setIsActiveUser(false)
                }}
              >
                 My Orders
              </NavLink>
            </li>
           <li>
            <NavLink
              to='/Blanca-E-commerce/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => {
                setIsActiveMenu(false)
                setIsActiveUser(false)
              }}
              >
                My Account
            </NavLink>
        </li>
        <li>
          <NavLink
            to='/Blanca-E-commerce/'
            className={({ isActive }) => 
              isActive ? activeStyle : undefined
            }
            onClick={() => handleSignOut()}
            >
              Sign Out
          </NavLink>
        </li>
        <li 
          className="flex items-center cursor-pointer"
          onClick={() => {
            openCheckOutSideMenu()
            setIsActiveMenu(false)
            setIsActiveUser(false)
          }}
        >
          <ShoppingBagIcon className='h-6 w-6 text-black'/>
          <div>{count}</div>
        </li>
        </ul>
        )}
        
    </nav>
  )
}
