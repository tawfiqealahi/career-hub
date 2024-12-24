import { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

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
           <h1 className="md:text-4xl  font-bold text-green-500 mb-4 animate-pulse">
             🚧 Opppssssssss
           </h1>
           <h1 className="md:text-4xl  font-bold text-green-500 mb-4 animate-pulse">
             🚧 Error Found
           </h1>
           <p className="text-lg text-gray-300">
              please , recheck the url or enter existance url here
                         </p>
           <div className="mt-8 flex justify-center">
             <div className="w-16 h-16 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
           </div>
           <Link to='/' > <button className="text-xl bg-red-700 rounded-lg border-t-orange-900 mt-10 md:px-8 md:py-3 "  >Go back to home</button> </Link>
         </div>
         
       </div>


  );
}
