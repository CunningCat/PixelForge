import { Search } from "lucide-react";
import TabSelector from "@/components/TabSelector";
export default function ChooseCommunity({setshowSelectCommunity}:{setshowSelectCommunity:()=>void}) {
 
  return (
    <div className="flex items-center justify-center h-screen w-full flex-col z-10 bg-black/50 absolute top-0 left-0">
      <div className="flex px-4  h-1/2 flex-col bg-white w-1/2 rounded-2xl ">
        <h1 className="text-2xl mt-3 font-bold text-center">选择社区</h1>
        <div className="h-8 flex items-center pl-2 gap-2 mt-2 bg-gray-100 rounded-xl">
          <Search className="w-5 h-5"/>
          <input type="text" placeholder="搜索社区" className="focus:outline-none w-full   "/>
        </div>
        <div>
          <TabSelector tabs={["为你推荐", "最近爱逛", "热门社区"]} onChange={(index) => {
    console.log("当前选中 index:", index);}} />
        </div>
        <div>社区列表</div>
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