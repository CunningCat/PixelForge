import { Avatar } from "@radix-ui/react-avatar";

export function CommentInfo (){
  return (
     <div className="flex flex-col">
      <Avatar />
      <div className="flex flex-col">
        <div>
          名字
        </div>
        <div>时间</div>
      </div>
      <div className="mt-2">内容</div>
     </div>
  )
   
  
}