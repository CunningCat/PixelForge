import PostItem from "./PostItem"
import Header from "../home/Header"
import {  useState } from "react";
import  {PostDownloadInfo}  from "@/types/postdownloadinfo";
import { toast } from "sonner";
import { getLatestNews } from "@/services/getLatestNews";
import { useEffect } from "react";
export default function Post() {
  
  const [postList, setPostList] = useState<PostDownloadInfo[] | null>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getLatestNews(4);
      if (res) {
        
        setPostList(res);
      } else {
        toast("失败", { description: "获取帖子失败。请稍后尝试" });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <Header />
      <main className="flex flex-col mt-10 gap-10 w-[50%] mx-auto ">
        {postList?postList.map((item) => <PostItem key={item.post_id} item={item}/>)
        : <div>加载中...</div>}
        
      </main>
      
    </div>
    
  )
}