
import Header from "../home/Header"


import { Outlet } from "react-router";
export default function Post() {
  

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <Header className="text-black bg-gray-100 shadow-xl border-gray-200 fixed top-0 left-0 w-full z-50"/>
      <div className="m-10 p-4">
        
      </div>
      
      <main className="flex flex-col mt-2 gap-10 w-[50%] mx-auto ">
        <Outlet />
      </main>
      
    </div>
    
  )
}