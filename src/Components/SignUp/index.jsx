import { useContext, useRef, useState} from "react"
import LayOut from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { Link, Navigate } from "react-router-dom"


function SignUp() {
  const { account, setAccount, setSignOut, setUserOn } =useContext(ShoppingCartContext)
  const form = useRef(null)
  const [required, setRequired] = useState({
    usernameBoolean: true,
    passwordBoolean: true,
    emailBoolean: true,
  })
  const handleSubmit = (event) =>{

    const formData = new FormData(form.current)
    const data = {
      password: formData.get('password'),
      email: formData.get('email'),
      name: formData.get('userName')
    }
        
    if(data.name === "") {
      event.preventDefault();
      return setRequired({...required, usernameBoolean:false})
    }
    if(data.email === "") {
      event.preventDefault();
      return setRequired({...required, usernameBoolean:true, emailBoolean:false, })
    }
    if(data.password === ""){
      event.preventDefault()
      return setRequired({usernameBoolean:true, emailBoolean:true, passwordBoolean:false})
    }
    setRequired({...required, passwordBoolean:true})
  
    const NewAccount = {
      "name":data.name,
      "email":data.email,
      "password":data.password,
    }
    setAccount([...account, NewAccount])
    setSignOut(true)
    setUserOn({name:data.name, email:data.email, password:data.password})
    return <Navigate replace to={'/'} />
  }
  return (
    <LayOut>
      <div className="w-11/12 max-w-72">
        <h2 className="font-medium text-xl text-center" >Sign Up</h2>
        <p className="font-light text-xs mb-3 text-black/60 text-center">It’s quick and easy.</p>
            <form className="flex flex-col gap-3 w-full" ref={form}>
            <label htmlFor="userName" className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
              <div className="flex items-center gap-3">
                <span>Name:</span> 
                <input 
                id="userName" 
                type="text" 
                name="userName"
                placeholder="abcd"
                className="rounded-lg focus:outline-none text-xs flex-1"/>
              </div>
              <span hidden={required.usernameBoolean} className="text-red-500 text-xs">Required*</span>

            </label>
            <label htmlFor="email" className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full"> 
              <div className="flex items-center gap-3">
                <span>Email: </span> 
              <input 
                id="email" 
                type="email"
                name="email"
                placeholder="abc-123@gmail.com"
                className="rounded-lg focus:outline-none text-xs flex-grow"/>
              </div>
              <span hidden={required.emailBoolean} className="text-red-500 text-xs">Required*</span>
            </label>
            <label htmlFor="password" className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
              <div className="flex items-center w-full gap-3">
                <span>Password:</span>
                <input 
                id="password" 
                type="password" 
                name="password" 
                placeholder="*********"
                className="rounded-lg focus:outline-none text-xs flex-grow"/>
              </div>
              <span hidden={required.passwordBoolean} className="text-red-500 text-xs">Required*</span>
            </label>
            <Link to="/Blanca-E-commerce">
              <button className="text-white text-sm bg-black rounded-lg  w-full p-3" onClick={handleSubmit}>Sign Up</button>
            </Link>
            </form>
      </div>
    </LayOut>
  )
}
export default SignUp