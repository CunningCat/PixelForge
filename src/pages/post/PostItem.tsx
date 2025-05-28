import { PostDownloadInfo } from "@/types/postdownloadinfo"
import { useNavigate } from "react-router"
import { ThumbsUp,Ellipsis } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
export default function PostItem( {item,className}:{item: PostDownloadInfo,className?:string} ) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const currentURL = window.location.origin;
  //复制链接方法
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentURL + `/post/${item.post_id}`);
      toast("链接已复制到剪贴板！");
      setIsActive(false);
      
    } catch {
      toast("复制失败，请手动复制");
      setIsActive(false);
    }

  };
  return (
    <div className={`flex flex-col  gap-2 p-4 rounded-2xl ${className}`}>
      <div className="postitem_author flex justify-between">
        <div className="flex mt-2">
          <img className="w-5 mr-2 rounded-full" src={item.avatar_url}></img>
          <div>{item.author}</div>
        </div>
        <div className="text-gray-300 mr-2 cursor-pointer flex flex-col relative" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
          <Ellipsis />
          {/* 复制链接 */}
          {isActive &&
          <button className="absolute w-20 flex justify-center items-center p-2 bg-white rounded-lg top-5 -right-6 cursor-pointer text-black"
          onClick={copyToClipboard}>复制链接</button>
          }
        </div>

      </div>
      <div className="flex flex-col gap-1 cursor-pointer"
      onClick={()=>navigate(`/post/${item.post_id}`)}>
        <div className="postitem_title text-2xl">{item.title}</div>
        <div className="postitem_content line-clamp-3">{item.content}</div>
        {item.image_url && <img className="w-40" src={item.image_url} alt={item.image_url} />}
        
        <div className="flex justify-end text-gray-300">
          <span className="mr-2 flex">
            <ThumbsUp className="w-5 h-5" />
            {item.likes}</span>
          <span className="mr-2 flex">
            <MessageSquare className="w-5 h-5" />
            {item.commentnum}</span>
        </div>
      </div>
      
    </div>
  )
}