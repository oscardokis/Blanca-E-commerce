import { Link } from "react-router-dom"
import { useContext, useRef, useState } from "react"
import { ShoppingCartContext } from "../../Context"

import LayOut from "../../Components/Layout"

function SignIn() {
  const [required, setRequired] = useState(true)
  const { account, setSignOut, setUserOn } = useContext(ShoppingCartContext)
  const lastUser = account?.[account.length - 1] ?? ""
  const form = useRef(null)
  
  const handleSubmit = (event) =>{
    const formData = new FormData(form.current)
    const data = {
      LogInEmail:formData.get("email"),
      LogInPassword:formData.get("password")
    }
    const ValidateUser = account.filter((user) => (user.email === data.LogInEmail) && (user.password === data.LogInPassword))
    if(ValidateUser.length === 0){
      event.preventDefault()
      return setRequired(false)
    }else{
      setUserOn({name:ValidateUser[0].name, email:ValidateUser[0].email, password:ValidateUser[0].password})
      setSignOut(true)
    }
  }
  return (
    <LayOut>
      <div className="w-11/12 max-w-72">
        <h2 className="font-medium text-xl mb-4 text-center sm:w-72">Welcome</h2>
        <form ref={form} className="flex flex-col w-full">
          <label htmlFor="email" className="flex justify-between items-center w-full"> 
            <div className="flex items-center w-full">
              Email:  
            <input 
              id="email" 
              type="email"
              name="email"
              defaultValue={lastUser.email}
              placeholder="abc-123@gmail.com"
              className="rounded-lg p-3 focus:outline-none text-xs flex-1"/>
            </div>
            
          </label>
          <label htmlFor="password" className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <span>Password: </span>
              <input 
              id="password" 
              type="password" 
              name="password" 
              defaultValue={lastUser.password}
              placeholder="*********"
              className="rounded-lg p-3 focus:outline-none text-xs flex-1"/>
            </div>
          </label>
          <Link to="/Blanca-E-commerce">
            <button className="text-white text-sm bg-black rounded-lg  w-full p-3" onClick={handleSubmit}>Log in</button>
          </Link>
        </form>
        <p hidden={required} className="text-red-500 text-xs text-center p-1">Email or Pasword are incorrect or does not exist</p>
        <p className="font-light text-center text-xs p-3 hover:underline cursor-pointer">Forgot password?</p>
        <Link to='/Blanca-E-commerce/sign-up'>
          <button type="submit" className=" text-sm border-2 font-semibold border-gray-400 text-gray-400 rounded-lg  w-full p-3">Create new account</button>
        </Link>
      </div>
    </LayOut>
  )
}

export default SignIn