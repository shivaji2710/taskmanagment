// import React, { useState } from 'react'
// import Nav from './Nav'
// import { useForm } from 'react-hook-form'
// import axios from 'axios'

// function Team() {
//   const {register,handleSubmit,reset}=useForm()
//   const [formdata,setformdata]=useState([])

//   const dataghe=(data)=>{
//     axios.post("http://localhost:8080/teams/create",data).then((res)=>{
//       console.log("data are send",res.data)
//       setformdata([...formdata,res.data])
//     }).catch((error)=>{
//       console.log("error are solve it",error);
//     })
//   }


//   const removedata=(id)=>{
//     axios.delete(`http://localhost:8080/teams/${id}`).then(()=>{
//       console.log(`remove the id data is ${id}`)
//       setformdata((prev) => prev.filter((item) => item.id !== id));
//     }).catch((error)=>{
//       console.log("error are solve it",error);
//     })
//   }
//   return (
//     <div>
//       {/* <Nav/> */}
//       <div>
//         <form action="" onSubmit={handleSubmit(dataghe)}>
//           <input {...register("teamName")} type="text"  placeholder='teamName'/>
//           <input {...register("branch")} type="text"  placeholder='branch'/>
//           <input {...register("department")} type="text"  placeholder='department'/>
//           <input type="submit" />
//         </form>
//       </div>

//       <div>
//         <>
//         <h1>sr.no</h1>
//         <h1>teamName</h1>
//         <h1>branch</h1>
//         <h1>department</h1>
//         <h1>action</h1>
//         </>
//       {formdata.map((item,index)=>(
//         <div key={item.id}>
//         <h1>{index+1}</h1>
//         <h1>{item.teamName}</h1>
//         <h1>{item.branch}</h1>
//         <h1>{item.department}</h1>

//         <div>
//           <button>view</button>
//           <button onClick={()=>removedata(item.id)}>remove</button>
//         </div>

//         </div>
//       ))}
//       </div>
//     </div>
//   )
// }

// export default Team




import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Nav from './Nav';

function Team() {
  const { register, handleSubmit, reset } = useForm();
  const [teams, setTeams] = useState([]);
  const [show, setShow] = useState(false);
  const [view, setView] = useState(null);
  const [depart,setdepart]=useState([])
  const [branch,setbranch]=useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/teams/getAllTeams")
      .then((res) => setTeams(res.data))
      .catch((error) => console.log("Error fetching teams:", error));

      axios
      .get("http://localhost:8080/departments/GetAll")
      .then((res) => {
        console.log(res.data);
        setdepart(res.data)
      })
      .catch((error) => {
        console.log("error solve it", error);
      });

      axios.get("http://localhost:8080/branches/GetAll")
      .then((res) => {
        setbranch(res.data);
      })
      .catch((error) => {
        console.log("Error fetching branches", error);
      });
  }, []);


  const addTeam = (data) => {
    axios.post("http://localhost:8080/teams/create", data)
      .then((res) => {
        console.log("Team added:", res.data);
        setTeams([...teams, res.data]);
        reset();
      })
      .catch((error) => console.log("Error:", error));
  };

  const removeTeam = (id) => {
    axios.delete(`http://localhost:8080/teams/${id}`)
      .then(() => {
        console.log(`Removed team ID: ${id}`);
        setTeams((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <Nav />
      </div>
      <div className="flex-1 p-6">
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Team
        </button>

        {show && (
          <div className="bg-white shadow-md p-4 rounded-md mt-4">
            <form onSubmit={handleSubmit(addTeam)} className="flex gap-4">
              <input {...register("teamName")} type="text" placeholder="Team Name" className="border p-2 rounded w-full" required />

              <select className="border p-2 rounded w-full" required  {...register("branchName")}>
                <option >select branchName</option>
              {branch.map((item,index)=>(
                <option key={item.id} value={item.branchName}>
                  {item.branchName}
                  </option>
              ))}
              </select>

              <select className="border p-2 rounded w-full" required {...register("department")} >
                <option value="">select department</option>
                {depart.map((item,index)=>(
                  <option key={item.id} value={item.department}>
                    {item.department}
                  </option>
                ))}
              </select>

              <input type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer" />
            </form>
          </div>
        )}

        <div className="mt-6">
          <h1 className="text-xl font-bold mb-2">Teams List</h1>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="grid grid-cols-5 gap-4 font-semibold bg-gray-300 p-2 rounded">
              <h1>Sr. No</h1>
              <h1>Team Name</h1>
              <h1>branch Name</h1>
              <h1>Department</h1>
              <h1>Action</h1>
            </div>

            {teams.map((item, index) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 p-2 border-b border-gray-300">
                <h1>{index + 1}</h1>
                <h1>{item.teamName}</h1>
                <h1>{item.branchName}</h1>  
                <h1>{item.department}</h1>
                <div className="space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => setView(item)}>View</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => removeTeam(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          {view && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 rounded">
              <h2 className="text-lg font-bold">Team Details</h2>
              <p>Team Name: {view.teamName}</p>
              <p>Branch: {view.branchName}</p>
              <p>Department: {view.department}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;

