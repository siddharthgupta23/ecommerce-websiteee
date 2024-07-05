// import React from 'react'
// import {useState} from "react"

// const Login = () => {
 

//   const [state,setState] = useState("Login");
//   const [formData,setFormData]=useState({
//     username:"",
//     password:"",
//     email:""
//   })
//   const changeHandler=(e)=>{
//    setFormData({...formData,[e.target.name]:e.target.value})
//   }


//   const login=async()=>
//   {
//      console.log("Login function executed",formData)
//      let responseData;
//      await fetch('http://localhost:4000/login',{
//        method:"POST",
//        headers:{
//          Accept:'application/formData',
//          'Content-Type':'application/json',
//        },
//        body: JSON.stringify(formData)
//      }).then((response)=>response.json()).then((data)=>responseData=data)
//      if(responseData.success)
//      {
//      localStorage.setItem('auth-token',responseData.token);
//      window.location.replace('/');
//    }
//    else{
//      alert(responseData.errors)
//    }
//     }
//     const signup=async()=>{
//     console.log("signup function executed",formData)
//     let responseData;
//     await fetch('http://localhost:4000/signup',{
//       method:"POST",
//       headers:{
//         Accept:'application/formData',
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify(formData)
//     }).then((response)=>response.json()).then((data)=>responseData=data)
//     if(responseData.success)
//     {
//     localStorage.setItem('auth-token',responseData.token);
//     window.location.replace('/');
//   }
//   else{
//     alert(responseData.errors)
//   }
//     }


//   return (
//     <section className="max_padd_container flexCenter flex-col pt-32 bg-slate-600 ">
//     <div className="max-w-[555px] h-[660px] bg-white m-auto px-14 py-10 rounded-md">

//       <h3 className='h3'>{state}</h3>
//       <div className='flex flex-col gap-4 mt-7'>
//       {state==="Sign Up"?<input name="username" value={formData.username}  onChange={changeHandler}type="text" placeholder="Your Name" className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>:''}
//         <input  name="email" value={formData.email} onChange={changeHandler}type="email" placeholder='Email address'  className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
//         <input  name="password" value={formData.password} onChange={changeHandler}type="password" placeholder='Password'  className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'/>
//         </div>
//         <button  onClick={()=>{state==="Login"?login():signup()}}className="btn_dark_rounded my-4 w-full !rounded-md">Continue</button>
//         {state==="Sign Up"?<p className="text-black font-bold ">Already have an account?<span  onClick={()=>{setState("Login")}} className="text-secondary underline cursor-pointer">Login</span></p>:
//          <p className="text-black font-bold ">Create an account?<span onClick={()=>{setState("Sign Up")}} className="text-secondary underline cursor-pointer">Click here</span></p>}
       
//         <div className='flexCenter mt-6 gap-3 '>
//         <input type="checkbox" name="" id=""/>
//         <p>BY Continuing,i agree to the terms of use and privacy policy </p>

//         </div>
//     </div>
//     </section>
//   )
// }

// export default Login
import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    console.log("Login function executed", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: "POST",
        headers: {
          Accept: 'application/formData',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const signup = async (e) => {
    e.preventDefault();
    console.log("Signup function executed", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: "POST",
        headers: {
          Accept: 'application/formData',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32 bg-slate-600">
      <div className="max-w-[555px] h-[660px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className='h3'>{state}</h3>
        <div className='flex flex-col gap-4 mt-7'>
          {state === "Sign Up" && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email address'
            className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
            className='h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl'
          />
        </div>
        <button
          onClick={(e) => { state === "Login" ? login(e) : signup(e) }}
          className="btn_dark_rounded my-4 w-full !rounded-md"
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?
            <span onClick={() => { setState("Login") }} className="text-secondary underline cursor-pointer">Login</span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account?
            <span onClick={() => { setState("Sign Up") }} className="text-secondary underline cursor-pointer">Click here</span>
          </p>
        )}
        <div className='flexCenter mt-6 gap-3'>
          <input type="checkbox" name="" id="" />
          <p>BY Continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </section>
  );
};

export default Login;

