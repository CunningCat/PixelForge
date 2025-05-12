import {  useEffect } from "react";
import getCommentList from "@/services/getCommentList";
import { useState } from "react";
import { T_CommentInfo } from "@/types/T_commentinfo";
import {CommentInfo} from "./CommentInfo";
export function CommentList({...props}){ 
  const [commentList, setCommentList] = useState<T_CommentInfo[]>([]);
  async function getinfo(){
      const arr= await getCommentList({post_id:props.post_id});
      console.log(arr);
      if(arr)
      {
        setCommentList(arr);
      }
    }
  useEffect(() => {
    getinfo();
  }, [props.refreshCommentList]);
  return (
    <div className="mx-40 mt-5 mb-5">
      <div>
        <span className="text-xl text-black">全部评论</span>
        <div>
          <hr></hr>
          {commentList.map((item) => (<CommentInfo {...item} key={item.id} />))}
        </div>
      </div>
    </div>
  )
}