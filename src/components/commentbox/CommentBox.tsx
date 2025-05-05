import { Avatar,AvatarImage } from "../ui/avatar"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { useState } from "react";

export default function CommentBox() {
  const {user} = useSelector((state: RootState) => state);
  const [commentNum, setCommentNum] = useState(0);
  const [isOpen, setIsOpen] = useState(false)

  const handleCommentNum = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentNum(e.target.value.length);
  }
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className=" flex flex-col  h-20 mx-40 mt-10">
      <div className="flex ">
        <Avatar >
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
      
    </div>
  )
}