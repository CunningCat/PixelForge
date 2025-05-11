import { PostDownloadInfo } from "@/types/postdownloadinfo"
import { useNavigate } from "react-router"
import { ThumbsUp,Ellipsis } from "lucide-react";
import { MessageSquare } from "lucide-react";
export default function PostItem( {item}:{item: PostDownloadInfo}) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-white gap-2 p-2 rounded-2xl">
      <div className="postitem_author flex justify-between">
        <div className="">
          <img></img>
          <div>{item.author}</div>
        </div>
        <button className="text-gray-300 mr-2 cursor-pointer">
          <Ellipsis />
        </button>
      </div>
      <div className="flex flex-col gap-1 cursor-pointer"
      onClick={()=>navigate(`/post/${item.post_id}`)}>
        <div className="postitem_title text-3xl">{item.title}</div>
        <div className="postitem_content">{item.content}</div>
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