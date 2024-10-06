import { useRef, useState,useEffect } from "react";


const OtpInput =({length=4,onOtpSubmit =()=>{}})=>{
  const [otp,setOtp]=useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(()=>{
   if(inputRef.current[0]){
     inputRef.current[0].focus();
   }
  },[])

  const handleChange=(index,e)=>{
  const value = e.target.value;

  if(isNaN(value)) return;

  const newOtp=[...otp];
  // for selecting the last added value 
  newOtp[index] = value.substring(value.length-1);
  setOtp(newOtp);

  const combinedOtp = newOtp.join("");

  if(combinedOtp.length=== length) onOtpSubmit(combinedOtp);
  // Show the next input if current input is filled
  if(value && index<length-1 && inputRef.current[index +1]){
    inputRef.current[index+1].focus();
  }
  }
   const handleClick =(index)=>{
     // pointing the pointer at the very last of index
      inputRef.current[index].setSelectionRange(1,1);

      if(index>0 && !otp[index-1]){
        inputRef.current[otp.indexOf("")].focus();
      }

   }

   const handleKeyDown =(index,e)=>{
   if(
     e.key ==="Backspace" && !otp[index] && index > 0 && inputRef.current[index-1]
   ){
     inputRef.current[index-1].focus();
   }
   }

    return (
    <>
    {
      otp.map((value,index)=>{
        return (
          <input type="text" 
          key={index}
          ref={(input)=>(inputRef.current[index]=input)}  
          value={value} 
          onChange={(e)=>handleChange(index,e)}
          onClick={()=> handleClick(index)} 
          onKeyDown={(e)=> handleKeyDown(index,e)}
          className="otpInput"/>
        )
        
      })
    }
    </>
  )
}
export default OtpInput;