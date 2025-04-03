// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useForm } from 'react-hook-form';
// import Nav from './Nav';

// function Roles() {
  
//   const {register,handleSubmit,reset}=useForm()
//   const [role,setrole]=useState([])
//   const [show,setshow]=useState(false)
//   const [view ,setview]=useState(null)

//   const viewshow=(view)=>{
//     setview(view)
//   }

//   useEffect(()=>{
//     axios.get("http://localhost:8080/roles/GetAll").then((res)=>{
//       console.log("all data are fetching");
//       setrole(res.data)
//     }).catch((err)=>{
//       console.log("err are show " ,err);
//     })
//   },[])


// const departmentdata=(data)=>{
//   axios.post("http://localhost:8080/roles/create",data).then((res)=>{
//       console.log(res.data);
//     setrole([...role,res.data])
//   }).catch((error)=>{
//       console.log("error solve it",error);
//   })
// }

// const removedata=(id)=>{
//   axios.delete(`http://localhost:8080/roles/${id}`).then(()=>{
//     console.log(`id are deleted , ${id}`);
//     setrole((prev)=>{
//       return prev.filter((item,index)=>item.id !== id)
//     })
//   }).catch((err)=>{
//     console.log("error are show" , err);
    
//   })
// }

//   return (
//     <div>
//       <Nav/>

//       <button onClick={()=>setshow(!show)}>Add Roles</button>
//       {show&&(
//         <>
//       <form action="" onSubmit={handleSubmit(departmentdata)}>
//           <input {...register("roleName")} type="text" placeholder='Role Name'/>
//         <input type="submit"/>
//       </form>

//         <div>
//         <h1>sr.no</h1>
//         <h1>Roles</h1>
//         <h1>action</h1>

//       {role.map((item,index)=>(
//         <div key={item.id}> 
//         <h1>{index+1}</h1>
//         <h1>{item.roleName}</h1>
//         <div>
//           <button onClick={()=>viewshow(item)}>view</button>
//           <button onClick={()=>removedata(item.id)}>Remove</button>
//         </div>
//         </div>
//       ))}

//     </div>
//     </>
//       )}


//       {view&&(
//         <>
//         <h1>view-id= {view.id}</h1>
//         <h1>view RoleName={view.roleName}</h1>
//         </>
//       )}

//     </div>
//   )
// }

// export default Roles







import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav';

function Roles() {
  const { register, handleSubmit, reset } = useForm();
  const [role, setrole] = useState([]);
  const [show, setshow] = useState(false);
  const [view, setview] = useState(null);

  const viewshow = (view) => {
    setview(view);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/roles/GetAll")
      .then((res) => {
        console.log("All data fetched");
        setrole(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, []);

  const departmentdata = (data) => {
    axios
      .post("http://localhost:8080/roles/create", data)
      .then((res) => {
        console.log(res.data);
        setrole([...role, res.data]);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const removedata = (id) => {
    axios
      .delete(`http://localhost:8080/roles/${id}`)
      .then(() => {
        console.log(`Deleted role ID: ${id}`);
        setrole((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (Nav) */}
      <div className="w-64 bg-gray-800 text-white">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <button
          onClick={() => setshow(!show)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Role
        </button>

        {show && (
          <div className="bg-white shadow-md p-4 rounded-md mt-4">
            <form onSubmit={handleSubmit(departmentdata)} className="flex gap-4">
              <input
                {...register("roleName")}
                type="text"
                placeholder="Role Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
              />
            </form>
          </div>
        )}

        <div className="mt-6">
          <h1 className="text-xl font-bold mb-2">Roles List</h1>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="grid grid-cols-4 gap-4 font-semibold bg-gray-300 p-2 rounded">
              <h1>Sr. No</h1>
              <h1>Id</h1>
              <h1>Role Name</h1>
              <h1>Action</h1>
            </div>

            {role.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-4 p-2 border-b border-gray-300"
              >
                <h1>{index + 1}</h1>
                <h1>{item.id}</h1>
                <h1>{item.roleName}</h1>
                <div className="space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => viewshow(item)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => removedata(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {view && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 rounded">
              <h2 className="text-lg font-bold">Role Details</h2>
              <p>ID: {view.id}</p>
              <p>Role Name: {view.roleName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Roles;
