import PostItem from "./PostItem"
import Header from "../home/Header"
export default function Post() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />
      <main className="flex flex-col gap-20 w-[50%] mx-auto ">
        <PostItem />
      </main>
      
    </div>
    
  )
}