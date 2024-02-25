import { useContext, useState } from "react"
import LayOut from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
function MyAccount() {
  const { userOn } = useContext(ShoppingCartContext)
  const [toggle, setToggle] = useState(true)
  return (
    <LayOut>
       <div className="flex flex-col sm:w-80">
        <h2 className="font-medium text-xl mb-4 text-center w-72">My Account</h2>
        <div className="flex p-3 items-center gap-2">
          <p className="font-light">Name:</p>
          <p className="font-semibold text-sm">{userOn.name}</p>
        </div>
        <div className="flex p-3 items-center gap-2">
          <p className="font-light">Email:</p>
          <p className="font-semibold text-sm">{userOn.email}</p>
        </div>
        <div className="flex justify-between p-3 items-center">
          <div className="flex items-center gap-2">
            <p className="font-light">Pasword:</p>
            <p hidden={toggle} className="font-semibold text-sm">{userOn.password}</p>
            <p hidden={!toggle} className="font-semibold text-sm">********</p>
          </div>
          <div className="flex">
            {toggle ? (<button className="text-white text-xs bg-slate-500 rounded-lg px-2 py-1" onClick={()=> setToggle(!toggle)}>Show</button>):
            (<button className="text-white text-xs bg-black rounded-lg px-2 py-1" onClick={()=> setToggle(!toggle)}>Hide</button>)}
          </div>
        </div>
      </div>      
    </LayOut>
  )
}

export default MyAccount