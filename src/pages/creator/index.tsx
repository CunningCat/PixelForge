import { Editor } from "./Editor"
import { useDispatch,useSelector } from "react-redux"
import { useEffect,useState } from "react";
import { setAuthor } from "@/store/modules/postStore";
import { RootState } from "@/store";
import ChooseCommunity from "./ChooseCommunity";

export default function  Creator() {
  const {userInfo} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  const [isShowSelectCommunity, setIsShowSelectCommunity] = useState(false);
  useEffect(() => {
    if(userInfo.name)
      dispatch(setAuthor(userInfo.name));
  })

  const showSelectCommunity = () => {
    setIsShowSelectCommunity(!isShowSelectCommunity);
    console.log(isShowSelectCommunity);
  }
  return (
    <div className="relative">
      <div className="flex items-center justify-center h-screen flex-col">
      
        <Editor setshowSelectCommunity={showSelectCommunity}/>
        
      </div>
      {isShowSelectCommunity && <ChooseCommunity setshowSelectCommunity={showSelectCommunity}/> }
    </div>
    
   
  )
}