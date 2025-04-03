// import React from 'react'
// import { Link } from 'react-router-dom'

// function Sidebar() {
//   return (
//     <div style={{display:"flex" , flexDirection:"column" }}>
//         <Link to="/deapartment">deapartment</Link>
//         <Link to="/branch">branch</Link>
//         <Link to="/Roles">Roles</Link>
//         <Link to="/team">Team</Link>
        
//     </div>
//   )
// }

// export default Sidebar



import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <nav className="space-y-4">
        <Link to="/deapartment" className="block py-2 px-4 rounded hover:bg-gray-700">Department</Link>
        <Link to="/branch" className="block py-2 px-4 rounded hover:bg-gray-700">Branch</Link>
        <Link to="/Roles" className="block py-2 px-4 rounded hover:bg-gray-700">Roles</Link>
        <Link to="/team" className="block py-2 px-4 rounded hover:bg-gray-700">Team</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
