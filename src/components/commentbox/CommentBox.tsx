import { Avatar,AvatarImage } from "../ui/avatar"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { useEffect, useState } from "react";
import { ThumbsUp } from "lucide-react";
import addComment from "@/services/addComment";
import { useRef } from "react";
import { toast } from "sonner";
import { likePost } from "@/services/likePosts";
import { unlikePost } from "@/services/unlikePosts";
import { queryLike } from "@/services/queryLike";


export default function CommentBox({post_id,refreshCommentList }:{post_id:string | undefined,refreshCommentList:()=>void}) {
  const {user} = useSelector((state: RootState) => state);
  const [commentNum, setCommentNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const handleCommentNum = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentNum(e.target.value.length);
  }
  const handleIsClick = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.type === 'focus') {
      setIsOpen(true);
    }
  };

  //点赞
  const handleLike = async () => {
    if(isLoading)
    {
      return;
    }
    if(!user.userInfo.uid)
    {
      toast("请先登录");
      return;
    }
    if(!post_id)
    {
      toast("无法点赞");
      return;
    }
    setIsLoading(true);
    if (liked) {
      const res = await unlikePost(post_id,user.userInfo.uid);
      if(res.success)
      {
        toast("取消点赞成功");
        setLiked(false);
      }
      else if(res.error)
      {
        toast("取消点赞失败",{
          description:res.error
        });
      }
    }
    else{
      const res = await likePost(post_id,user.userInfo.uid);
      if(res.success)
      {
        toast("点赞成功");
        setLiked(true);
      }
      else if(res.error)
      {
        toast("点赞失败",{
          description:res.error
        });
      }
    }
    setIsLoading(false);
  }
  // 发表评论
   async function  handlePostComment(){
    if(commentNum === 0)
    {
      toast("评论不能为空");
      return;
    }

    const content = commentRef.current?.value;
    const res = await addComment({content:content,post_id:post_id,user_id:user.userInfo.uid,user_avatar:user.userInfo.avatar_url,author:user.userInfo.name});
    if(res)
    {
      toast("评论成功");
      commentRef.current!.value = "";
      setCommentNum(0);
      // 添加成功后刷新评论列表
      refreshCommentList();

    }
    else
    {
      toast("评论失败");
    }
  }
  useEffect(() => {
    const getLikeInfo = async () => {
      if(!post_id)
      {
        return;
      }
      const res = await queryLike(post_id,user.userInfo.uid);
      if (!res.error) {
        setLiked(res.success);
      }
    }
    getLikeInfo();
  },[]);
  return (
    <div className=" flex flex-col  mx-40 mt-10" >
      <div className="flex ">
        <Avatar className="mr-2">
          <AvatarImage src= {user.userInfo.avatar_url} />
        </Avatar>
        <textarea  placeholder="评论" maxLength={100} className="focus:bg-white  border-2 border-gray-200 bg-gray-300 rounded-lg pl-2 w-full pt-2 resize-none "
        rows={3} ref={commentRef}
        onInput={handleCommentNum} onFocus={handleIsClick}  ></textarea >
      </div>
      {isOpen && <span className="flex items-center justify-center pl-10 mt-2 text-gray-500">
        {commentNum}/100
        <button className="ml-auto w-20 mt-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 cursor-pointer rounded-lg"
        onClick={handlePostComment}>发表</button>
      </span>}
      <div className="flex mt-2">
        <div className={`cursor-pointer  items-center flex ml-10 bg-gray-200 p-2 rounded-full ${liked ? "text-white bg-red-400" : "text-gray-500"} ${isLoading ? 'pointer-events-none opacity-50' : ''}`} onClick={() => handleLike()} >
          <ThumbsUp className={`w-5 h-5  `}/>
          <span className="ml-2  ">点赞</span>
        </div>
          
      </div>
      
      
    </div>
  )
}