import PostItem from "./PostItem"
import Header from "../home/Header"
import {  useRef, useState } from "react";
import  {PostDownloadInfo}  from "@/types/postdownloadinfo";
import { getLatestNews } from "@/services/getLatestNews";
import { useEffect } from "react";

export default function Post() {
  const [hasMore, setHasMore] = useState(true);
  const [postList, setPostList] = useState<PostDownloadInfo[]>([]);
  const offset =useRef(0);
  

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    
    const res = await getLatestNews(offset.current);
    if (res && res.length > 0) {
      setPostList(prev => [...prev, ...res]);
      offset.current += res.length;
       if (res.length < 5) {
        setHasMore(false); // 已经没有更多了
    }
    }
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      <Header />
      <main className="flex flex-col mt-10 gap-10 w-[50%] mx-auto ">
        {postList?postList.map((item) => <PostItem className="bg-gray-100" key={item.post_id} item={item}/>)
        : <div>加载中...</div>}
        <button onClick={loadPosts}>{hasMore ? "加载更多" : "没有更多内容了"}</button>
      </main>
      
    </div>
    
  )
}