
import Header from "../home/Header"


import { Outlet } from "react-router";
export default function Post() {
  

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <Header className="text-black bg-gray-100"/>
      <div className="m-2 p-4">
        
      </div>
      
      <main className="flex flex-col mt-2 gap-10 w-[50%] mx-auto ">
        <Outlet />
      </main>
      
    </div>
    
  )
}