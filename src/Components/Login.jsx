// import axios from 'axios'
// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'

// function Login() {

//         const {register,handleSubmit,reset}=useForm()
//         const navigate=useNavigate()

//     const logindata=(data)=>{
//         axios.post("http://localhost:8080/admin/login",data,{
//             headers:{
//                 "Content-Type":"application/json",
//             }
//         }).then((res)=>{
//             console.log(res.data);
//             navigate("/nav")

//         }).catch((error)=>{
//             console.log("error solve it",error);
            
//         })
//     }
//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit(logindata)}>
//             <input {...register("email")} type="text" placeholder='email'/>
//             <input {...register("password")} type="text" placeholder='password'/>
//             <input type="submit" />
//         </form>
//     </div>
//   )
// }

// export default Login




import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const logindata = (data) => {
    axios.post("http://localhost:8080/admin/login", data, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log(res.data);
      navigate("/nav");
    }).catch((error) => {
      console.log("error solve it", error);
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit(logindata)} className="space-y-4">
          <input {...register("email")} type="email" placeholder="Email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input {...register("password")} type="password" placeholder="Password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
