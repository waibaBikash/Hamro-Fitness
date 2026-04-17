import { AtSignIcon } from "lucide-react"
import { useState } from "react"



const Login = () => {

  const [state, setState] = useState('login')

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
                         <input type="text" />
                      </div>
                 </div>
               )}
             </form>
        </main>
    </>
  )
}

export default Login