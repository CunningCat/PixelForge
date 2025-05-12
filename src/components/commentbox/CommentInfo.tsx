import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export function CommentInfo ({...props}){
  return (
     <div className="flex flex-col mt-3">
      <div className="flex">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Avatar >
            <AvatarImage src= {props.user_avatar} />
          </Avatar>
          
        </div>
        <div className="flex flex-col ml-2">
            <div className="font-bold">
              {props.author}
            </div>
            <div className="text-xs text-gray-500">{props.created_at}</div>
          </div>
      </div>
      
      <div className="mt-2 ml-12 min-h-15">{props.content}</div>
      <hr></hr>
     </div>
  )
   
  
}