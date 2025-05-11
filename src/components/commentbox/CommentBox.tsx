import { Avatar,AvatarImage } from "../ui/avatar"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { useState } from "react";
import { ThumbsUp } from "lucide-react";
export default function CommentBox() {
  const {user} = useSelector((state: RootState) => state);
  const [commentNum, setCommentNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  const [liked, setLiked] = useState(false);
  const handleCommentNum = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentNum(e.target.value.length);
  }
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className=" flex flex-col  mx-40 mt-10">
      <div className="flex ">
        <Avatar className="mr-2">
          <AvatarImage src= {user.userInfo.avatar_url} />
        </Avatar>
        <textarea  placeholder="评论" maxLength={100} className="focus:bg-white  border-2 border-gray-200 bg-gray-300 rounded-lg pl-2 w-full pt-2 resize-none "
        rows={3}
        onInput={handleCommentNum} onFocus={handleClick} onBlur={handleClick} ></textarea >
      </div>
      {isOpen && <span className="flex items-center justify-center pl-10 mt-2 text-gray-500">
        {commentNum}/100
        <button className="ml-auto w-20 mt-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 cursor-pointer rounded-lg">发表</button>
      </span>}
      <div className="flex mt-2">
        <div className={`cursor-pointer  items-center flex ml-10 bg-gray-200 p-2 rounded-full ${liked ? "text-white bg-red-400" : "text-gray-500"}`} onClick={() => setLiked(!liked)} >
          <ThumbsUp className={`w-5 h-5  `}/>
          <span className="ml-2  ">点赞</span>
        </div>
          
      </div>
      
      
    </div>
  )
}