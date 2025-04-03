// import axios from 'axios'
// import React from 'react'
// import {useForm} from 'react-hook-form'
// import { Link, useNavigate } from 'react-router-dom'
// function CreateAdmin() {
//   const navigate=useNavigate()

//     const {register,handleSubmit,reset}=useForm()

//   const registerdata=(data)=>{
//       axios.post("http://localhost:8080/admin/register",data).then(()=>{
//         console.log(data);
//         navigate("/login")
//       }).catch((error)=>{
//         console.log("solve this error",error);
//       })
//   }


//   return (
//     <div>
//         <form action="" onSubmit={handleSubmit(handleSubmit(registerdata))}>
//             <input style={{borderRadius:"2vw" ,marginRight:"1vw"}} {...register("name")} type="text" placeholder='name' required/>
//             <input style={{borderRadius:"2vw" ,marginRight:"1vw"}}  {...register("email")} type="text" placeholder='email'  required/>
//             <input style={{borderRadius:"2vw" ,marginRight:"1vw"}} {...register("phone")} type="text" placeholder='phone'  required/>
//             <input style={{borderRadius:"2vw" ,marginRight:"1vw"}} {...register("password")} type="text" placeholder='password' required/>
//             <input style={{borderRadius:"2vw" ,marginRight:"1vw"}}  {...register("cpassword")} type="text" placeholder='cpassword' required/>
//             <input style={{borderRadius:"2vw" ,marginRight:"1vw"}}  type="submit" />
//             <Link to="/login">already login</Link>
//         </form>
//     </div>
//   )
// }

// export default CreateAdmin




import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function CreateAdmin() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const registerdata = (data) => {
    axios.post("http://localhost:8080/admin/register", data)
      .then(() => {
        console.log(data);
        navigate("/login");
      })
      .catch((error) => {
        console.log("solve this error", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Register Admin</h2>
        <form onSubmit={handleSubmit(registerdata)} className="space-y-4">
          <input {...register("name")} type="text" placeholder="Name" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input {...register("email")} type="email" placeholder="Email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input {...register("phone")} type="text" placeholder="Phone" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input {...register("password")} type="password" placeholder="Password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input {...register("cpassword")} type="password" placeholder="Confirm Password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Register</button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default CreateAdmin;
