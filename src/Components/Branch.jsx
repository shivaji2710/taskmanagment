

// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { useForm } from 'react-hook-form';
// import Nav from './Nav';

// function Branch() {
  
//   const {register,handleSubmit,reset}=useForm()
//   const [branch,setbranch]=useState([])
//   const [show,setshow]=useState(false)
//   const [view,setview]=useState(null)

//   const clickviewshowdata=(viewdata)=>{
//     setview(viewdata)
//   }

//   useEffect(() => {
//     axios.get("http://localhost:8080/branches/GetAll")
//       .then((res) => {
//         setbranch(res.data);
//       })
//       .catch((error) => {
//         console.log("Error fetching branches", error);
//       });
//   }, []);

//   const branchdata = (data) => {
//     axios.post("http://localhost:8080/branches/create", data).then((res) => {
//       console.log(res.data);
//       setbranch([...branch, res.data]); 
//       reset();
//     }).catch((error) => {
//       console.log("error solve it", error);
//     });
//   };

//   const removebranchdata = (id) => {
//     axios.delete(`http://localhost:8080/branches/${id}`).then(() => {
//       console.log(`data has been deleted, ${id}`);
//       setbranch((prev) => prev.filter((item) => item.id !== id));
//     }).catch((err) => {
//       console.log("solve error", err);
//     });
//   };

//   return (
//     <div>
//       <Nav/>
      
//       <button onClick={()=>setshow(!show)}>branch</button>
//       {show&&(
//         <>
//       <form action="" onSubmit={handleSubmit(branchdata)}>
//           <input {...register("branchName")} type="text" placeholder='branch Name' required/>
//         <input type="submit"/>
//       </form>

//       <div>
//           <>
//           <h1>sr.no</h1>
//           <h1>branch</h1>
//           <h1>action</h1>
//           </>

//         {branch.map((item, index) => (
//          <div key={item.id}>
//           <h1 >{index+1}</h1>
//           <h1>{item.branchName}</h1>
//           <div>
//             <button onClick={()=>clickviewshowdata(item)}>view</button>
//             <button onClick={() => removebranchdata(item.id)}>remove</button>
//           </div>
//           </div>
//         ))}

//         {view&&(
//           <>
//           <h1>branch-id:{view.id}</h1>
//           <h1>branch-name:{view.branchName}</h1>
//           </>
//         )}

//       </div>
//       </>
//       )}
//     </div>
//   )
// }

// export default Branch;




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Nav from './Nav';

function Branch() {
  const { register, handleSubmit, reset } = useForm();
  const [branch, setbranch] = useState([]);
  const [show, setshow] = useState(false);
  const [view, setview] = useState(null);

  const clickviewshowdata = (viewdata) => {
    setview(viewdata);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/branches/GetAll")
      .then((res) => {
        setbranch(res.data);
      })
      .catch((error) => {
        console.log("Error fetching branches", error);
      });
  }, []);

  const branchdata = (data) => {
    axios.post("http://localhost:8080/branches/create", data).then((res) => {
      console.log(res.data);
      setbranch([...branch, res.data]); 
      reset();
    }).catch((error) => {
      console.log("Error:", error);
    });
  };

  const removebranchdata = (id) => {
    axios.delete(`http://localhost:8080/branches/${id}`).then(() => {
      console.log(`Branch deleted, ID: ${id}`);
      setbranch((prev) => prev.filter((item) => item.id !== id));
    }).catch((err) => {
      console.log("Error:", err);
    });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <button
          onClick={() => setshow(!show)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Branch
        </button>

        {show && (
          <div className="bg-white shadow-md p-4 rounded-md mt-4">
            <form onSubmit={handleSubmit(branchdata)} className="flex gap-4">
              <input
                {...register("branchName")}
                type="text"
                placeholder="Branch Name"
                required
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
          <h1 className="text-xl font-bold mb-2">Branch List</h1>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="grid grid-cols-4 gap-4 font-semibold bg-gray-300 p-2 rounded">
              <h1>Sr. No</h1>
              <h1>Id</h1>
              <h1>Branch Name</h1>
              <h1>Action</h1>
            </div>

            {branch.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-4 p-2 border-b border-gray-300"
              >
                <h1>{index + 1}</h1>
                <h1>{item.id}</h1>
                <h1>{item.branchName}</h1>
                <div className="space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => clickviewshowdata(item)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => removebranchdata(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {view && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 rounded">
              <h2 className="text-lg font-bold">Branch Details</h2>
              <p>ID: {view.id}</p>
              <p>Branch Name: {view.branchName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Branch;
