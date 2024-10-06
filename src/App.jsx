
import './App.css'
import PhoneOtpForm from "./OTP/phone-login.jsx"
import OtpInput from "./OTP/otp-input.jsx"
import Success from "./OTP/success.jsx"
import {createBrowserRouter,
  RouterProvider,} from 'react-router-dom'
import Layout from './layouts/Layouts'

  const router = createBrowserRouter([{

    element:<Layout/>,
   children: [
    {
      path:'/',
      element:<PhoneOtpForm/>
    },
    {
      path:'/otp',
      element:<OtpInput/>
    },
    {
      path:'/success',
      element: <Success/>
    },]
  }
])

function App() {
  

  return (
    <>
    
      <RouterProvider router={router}/>
      
    
      
    </>
  )
}

export default App
