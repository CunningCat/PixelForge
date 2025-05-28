import { Search } from "lucide-react";
import TabSelector from "@/components/TabSelector";
import "./css/index.css"
import {  useState } from "react";
import { setCommunity } from "@/store/modules/postStore";
import { useDispatch } from "react-redux";

import CommunityListItem from "./CommunityListItem";
export default function ChooseCommunity({setshowSelectCommunity}:{setshowSelectCommunity:()=>void}) {
  const [showList, setShowList] = useState(0);
  const dispatch = useDispatch();
  
  //选择社区
  const selectCommunity = (name:string)=>{
    console.log("你点击了社区：", name);
    dispatch(setCommunity(name));
    setTimeout(() => {
      setshowSelectCommunity();
  }, 100);
    
  }
  

  return (
    <div className="flex items-center justify-center h-screen w-full flex-col z-10 bg-black/50 absolute top-0 left-0">
      <div className="flex px-4  h-1/2 flex-col bg-white w-1/2 rounded-2xl ">
        <h1 className="text-2xl mt-3 font-bold text-center">选择社区</h1>
        <div className="h-8 flex items-center pl-2 gap-2 mt-2 bg-gray-100 rounded-xl">
          <Search className="w-5 h-5"/>
          <input type="text" placeholder="搜索社区" className="focus:outline-none w-full   "/>
        </div>
        <div>
          <TabSelector tabs={["为你推荐", "热门社区"]} onChange={(index) => {
    setShowList(index);}} />
        </div>
        <div>
          <div>
            
            
              {showList === 0 ?
              <ul>
                <CommunityListItem name="英雄联盟" selectCommunity={selectCommunity}/>
                <CommunityListItem name="CS2" selectCommunity={selectCommunity}/>
                <CommunityListItem name="堡垒之夜" selectCommunity={selectCommunity}/>
                <CommunityListItem name="数码硬件" selectCommunity={selectCommunity}/>
                
              </ul>:
              <ul>
                <CommunityListItem name="英雄联盟" selectCommunity={selectCommunity}/>
                <CommunityListItem name="CS2" selectCommunity={selectCommunity}/>
                <CommunityListItem name="守望先锋" selectCommunity={selectCommunity}/>
                <CommunityListItem name="数码硬件" selectCommunity={selectCommunity}/>
              </ul>}
              
             
            
          </div>
        </div>
        <div className="mt-auto w-full h-20 flex items-center justify-center p-4">
          <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-300" onClick={() => setshowSelectCommunity()}>
            <button className="text-gray-500 cursor-pointer">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}