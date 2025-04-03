// import React from 'react'
// import Sidebar from './Sidebar'

// function Nav() {
//   return (
//     <div>
//         <h1>Admin dashboard</h1>
//         <Sidebar/>
//     </div>
//   )
// }

// export default Nav



import React from 'react';
import Sidebar from './Sidebar';

function Nav() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white min-h-screen">
        <Sidebar />
      </div>
      {/* <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-500">Admin Dashboard</h1>
      </div> */}
    </div>
  );
}

export default Nav;
