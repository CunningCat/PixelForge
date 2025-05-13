import { useState } from "react";
import  TextImage  from "./TextImage";
import  Article  from "./Article";
import createPost from "@/services/createPost";
import { useSelector } from "react-redux";
import  {RootState}  from '@/store';
import { useDispatch } from "react-redux";
import { setUid } from "@/store/modules/postStore";
import {  useNavigate } from "react-router";
import {toast} from "sonner"
import { useAsyncLock } from "@/hooks/useAsynLock";


//创作者编辑器
export function Editor() {
  const tabs = ["发布图文", "发布文章"];
  const [activeIndex, setActiveIndex] = useState(0);
  const {post} = useSelector((state:RootState) => state);
  const {userInfo} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {withLock,locked} = useAsyncLock();
  //设置uid
  dispatch(setUid(userInfo.uid));
  //发布
  const handlePost = async () => {
    await withLock(async () =>{
      
    
    
    //创建帖子
    const data =await createPost({PostInfo:post.postInfo});
    
      if (data) {
        toast("发布成功", {
          description: "完成",
          action: {
            label: "关闭",
            onClick: () => console.log("关闭"),
          },
        });
      navigate('/');
      
      }
      }
    
  )}


  return (
    <div className="w-150 h-200 bg-white flex flex-col rounded-lg shadow-lg relative px-6">
      <div className=" mt-6 gap-6 flex">
        {/* 选项卡切换 */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg cursor-pointer ${
              activeIndex === index
                ? " text-gray-900"
                : " text-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab}
          </button>
        ))}
        
      </div>
      <div
        className=" bottom-0 h-0.5 bg-black transition-all duration-300 "
        style={{
          width: `96px`,
          transform: `translateX(${activeIndex * 120}px)`,
        }}
      />
      {activeIndex === 0 ? <TextImage /> : <Article />}
      <div className="flex mt-4 absolute bottom-5 right-5">
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-10 rounded-lg cursor-pointer"
        onClick={handlePost} disabled={locked}>
          发布
        </button>
      </div>
    </div>
  )
}