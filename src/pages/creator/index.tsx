import { Editor } from "./Editor"
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react";
import { setAuthor } from "@/store/modules/postStore";
import { RootState } from "@/store";

export default function  Creator() {
  const {userInfo} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if(userInfo.name)
      dispatch(setAuthor(userInfo.name));
  })
  return (
    <div>
      <div className="flex items-center justify-center h-screen flex-col">

        <Editor />
        
      </div>
      
    </div>
   
  )
}