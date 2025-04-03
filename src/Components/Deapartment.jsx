
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import Nav from "./Nav";

// function Deapartment() {
//   const { register, handleSubmit, reset } = useForm();
//   const [realdepartment, setrealdepartment] = useState([]);
//   const [show, setshow] = useState(false);
//   const [departmentdatabox, setdepartmentdatabox] = useState(null);

//   const viewdata = (showdata) => {
//     setdepartmentdatabox(showdata); 
//   };

//   useEffect(() => {
//     dokalavanidataan();
//   }, []);

//   const dokalavanidataan = () => {
//     axios
//       .get("http://localhost:8080/departments/GetAll")
//       .then((res) => {
//         console.log(res.data);
//         setrealdepartment(res.data);
//       })
//       .catch((error) => {
//         console.log("error solve it", error);
//       });
//   };

//   const departmentdata = (data) => {
//     axios
//       .post("http://localhost:8080/departments/create", data)
//       .then((res) => {
//         console.log(res.data);
//         setrealdepartment([...realdepartment, res.data]);
//       })
//       .catch((error) => {
//         console.log("error solve it", error);
//       });
//   };

//   const deletedepartment = (id) => {
//     axios
//       .delete(`http://localhost:8080/departments/${id}`)
//       .then(() => {
//         console.log(`Deleted department with ID: ${id}`);
//         setrealdepartment((prev) => prev.filter((item,index) => item.id !== id));
//       })
//       .catch((error) => {
//         console.error("Error deleting department:", error);
//       });
//   };

//   return (
//     <div>
//       <Nav/>
//       <nav>
//         <button onClick={() => setshow(!show)}> Add department</button>
//       </nav>

//       {show && (
//         <>
//           <form action="" onSubmit={handleSubmit(departmentdata)}>
//             <input {...register("department")} type="text" placeholder="department" />
//             <input type="submit" />
//           </form>

//           <div>
//             <h1>Sr. No</h1>
//             <h1>ID</h1>
//             <h1>Department</h1>
//             <h1>Action</h1>

//             <div>
//               {realdepartment.map((item, index) => (
//                 <div key={item.id}>
//                   <h1>{index + 1}</h1>
//                   <h1>{item.id}</h1>
//                   <h1>{item.department}</h1>
//                   <div>
//                     <button onClick={() => viewdata(item)}>View</button>
//                     <button onClick={() => deletedepartment(item.id)}>Delete</button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {departmentdatabox && (
//               <div>
//                 <p>ID: {departmentdatabox.id}</p>
//                 <p>Department: {departmentdatabox.department}</p>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Deapartment;







import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Nav from "./Nav";

function Deapartment() {
  const { register, handleSubmit, reset } = useForm();
  const [realdepartment, setrealdepartment] = useState([]);
  const [show, setshow] = useState(false);
  const [departmentdatabox, setdepartmentdatabox] = useState(null);

  const viewdata = (showdata) => {
    setdepartmentdatabox(showdata);
  };

  useEffect(() => {
    dokalavanidataan();
  }, []);

  const dokalavanidataan = () => {
    axios
      .get("http://localhost:8080/departments/GetAll")
      .then((res) => {
        console.log(res.data);
        setrealdepartment(res.data);
      })
      .catch((error) => {
        console.log("error solve it", error);
      });
  };

  const departmentdata = (data) => {
    axios
      .post("http://localhost:8080/departments/create", data)
      .then((res) => {
        console.log(res.data);
        setrealdepartment([...realdepartment, res.data]);
      })
      .catch((error) => {
        console.log("error solve it", error);
      });
  };

  const deletedepartment = (id) => {
    axios
      .delete(`http://localhost:8080/departments/${id}`)
      .then(() => {
        console.log(`Deleted department with ID: ${id}`);
        setrealdepartment((prev) => prev.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting department:", error);
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
        <nav className="mb-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setshow(!show)}
          >
            Add Department
          </button>
        </nav>

        {show && (
          <div className="bg-white shadow-md p-4 rounded-md">
            <form onSubmit={handleSubmit(departmentdata)} className="flex gap-4">
              <input
                {...register("department")}
                type="text"
                placeholder="Department"
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
          <h1 className="text-xl font-bold mb-2">Department List</h1>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="grid grid-cols-4 gap-4 font-semibold bg-gray-300 p-2 rounded">
              <h1>Sr. No</h1>
              <h1>ID</h1>
              <h1>Department</h1>
              <h1>Action</h1>
            </div>

            {realdepartment.map((item, index) => (
              <div
                key={item.id}
                className="grid grid-cols-4 gap-4 p-2 border-b border-gray-300"
              >
                <h1>{index + 1}</h1>
                <h1>{item.id}</h1>
                <h1>{item.department}</h1>
                <div className="space-x-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => viewdata(item)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deletedepartment(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {departmentdatabox && (
            <div className="mt-4 p-4 bg-blue-100 border border-blue-400 rounded">
              <h2 className="text-lg font-bold">Department Details</h2>
              <p>ID: {departmentdatabox.id}</p>
              <p>Department: {departmentdatabox.department}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Deapartment;
