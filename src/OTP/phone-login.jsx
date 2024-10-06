import react, { useState } from 'react';
import OtpInput from "../OTP/otp-input.jsx";
import { useNavigate } from 'react-router-dom';

const PhoneOtpForm =()=>{
  const [phone,setPhone] = useState("");
  const[showOtp,setShowOtp] = useState(false);
  const navigate = useNavigate()

  const onOtpSubmit=(otp)=>{
   console.log("Login successful",otp);
   navigate("/success")
  }

  const handlePhoneNumber =(e)=>{
      setPhone(e.target.value);
  }

  const handlePhoneSubmit =(e)=>{
     e.preventDefault();
     
     const regex = /[^0-9]/g;
     if(phone.length<10 || regex.test(phone)){
       alert("Invalid Phone Number");
       return;
     }
     setShowOtp(true);
     }
  return(
  <>{!showOtp ?(
    <div className="form"> 
    <h1>LOGIN WITH PHONE</h1>
      <form onSubmit={handlePhoneSubmit} className="forms" >
        <input type="text"
        value={phone}
        onChange={handlePhoneNumber} 
        placeholder="Enter your Phone number" 
        className="input" />
        <button type="submit" className="ntn">Submit</button>
      </form>
    </div>):
    (
      <div>
        <p>Enter OTP sent to {phone}</p>
        <OtpInput lenght={4} onOtpSubmit={onOtpSubmit}/>
      </div>
    )
}

  </>

  )
}
export default PhoneOtpForm;