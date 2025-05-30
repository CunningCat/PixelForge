import PostItem from "./PostItem"
import { useParams } from "react-router";
import {  useRef, useState } from "react";
import  {PostDownloadInfo}  from "@/types/postdownloadinfo";
import { useEffect } from "react";
import InfiniteScroll from "@/components/InfiniteScrollProps";
import { getCommunityNews } from "@/services/getCommunityNews";
import ButtonReturn from "@/components/ui/ButtonReturn";
export default function Page_Community() {
  const communityMap:{[key: string]: string } ={
    computer:"数码硬件",
    lol:"英雄联盟",
    cs2:"CS2",
  }
  const {community} = useParams();
  
  const [postList, setPostList] = useState<PostDownloadInfo[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const offset =useRef(0);
     
   
    
  useEffect(() => {
    if(!community) return;
    
    loadPosts();
  }, []);
  const loadPosts = async () => {
    if (!hasMore) {
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    if(!community) return;
    const res = await getCommunityNews(offset.current,5,communityMap[community]);
    if (res && res.length >= 0) {
      setPostList(prev => [...prev, ...res]);
      offset.current += res.length;
       if (res.length < 5) {
        setHasMore(false); // 已经没有更多了
    }
    }
    setLoading(false);
  }
  return (
    <div>
      
        <ButtonReturn />
      
      
      {postList?postList.map((item) => <PostItem className="bg-gray-100 mb-4  rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300" key={item.post_id} item={item}/>)
        : <div>加载中...</div>}
      
      {hasMore? <InfiniteScroll onReachBottom={loadPosts} />:
      <div className="flex justify-center items-center h-20 text-l text-gray-500">-----------没有更多了-----------</div>}
    </div>
  );
}