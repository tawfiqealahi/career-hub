import React, { useEffect, useState } from 'react'

const Jobs = () => {
     const [fade, setFade] = useState(false);
 
     useEffect(() => {
       const timeout = setTimeout(() => setFade(true), 500); // Trigger fade-in effect
       return () => clearTimeout(timeout);
     }, []);
   
     return (
       <div className="flex items-center  justify-center h-screen ">
         <div
           className={`text-center p-10 border border-green-400 rounded-lg shadow-xl text-green-500 transform transition-transform duration-1000 ${
             fade ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
           }`}
         >
           <h1 className="text-4xl  font-bold text-green-500 mb-4 animate-pulse">
             🚧 This Page is Not Ready Yet
           </h1>
           <p className="text-lg text-gray-300">
             Please revisit later. We're working hard to make this page awesome!
           </p>
           <div className="mt-8 flex justify-center">
             <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
           </div>
         </div>
       </div>
     );
   };
 

export default Jobs