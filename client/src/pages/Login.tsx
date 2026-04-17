import { AtSignIcon, MailIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"



const Login = () => {

  const [state, setState] = useState('sign up')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()
  const {login, signup, user}
= useAppContext()

useEffect(()=>{
  if(user){
    navigate('/')
  }
},[user, navigate])

  return (
    <>
        <main className="login-page-container">
             <form className="login-form">
               <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
                 {state === 'login' ? 'Sign In' : 'Sign Up'}
               </h2>
               <p className="text-sm text-gray-500/90 dark:text-gray-400">{state === 'login' ? 'Welcome back! Please enter your details.' : 'Create an account to get started.'}</p>

               {state !== 'login' && (
                 <div className="mt-4">
                    <label className="font-medium text-sm text-gray-700 dark:text-gray-300" >
                      Username</label>
                      <div className="relative mt-2">
                         <AtSignIcon 
                         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5"
                         />
                         <input
                         onChange={(e) => setUsername(e.target.value)} value={username}
                          type="text" placeholder="enter a username" className="login-input" required/>
                      </div>
                 </div>
               )}
                  {/* Email */}
               <div className="mt-4">
                    <label className="font-medium text-sm text-gray-700 dark:text-gray-300" >
                      Email</label>
                      <div className="relative mt-2">
                         <MailIcon 
                         className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5"
                         />
                         <input
                         onChange={(e) => setEmail(e.target.value)} value={email}
                          type="email" placeholder="enter a email" className="login-input" required/>
                      </div>
                 </div>
             </form>
        </main>
    </>
  )
}

export default Login