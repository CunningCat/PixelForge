import { useState } from "react";
import  TextImage  from "./TextImage";
import  Article  from "./Article";
import createPost from "@/services/createPost";
import { useSelector } from "react-redux";
import  {RootState}  from '@/store';
import { useDispatch } from "react-redux";
import { setUid } from "@/store/modules/postStore";

//创作者编辑器
export function Editor() {
  const tabs = ["发布图文", "发布文章"];
  const [activeIndex, setActiveIndex] = useState(0);
  const {post} = useSelector((state:RootState) => state);
  const {userInfo} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  //发布
  const handlePost = async () => {
    
    //设置用户id
    dispatch(setUid(userInfo.uid));
    //创建帖子
    createPost({PostInfo:post.postInfo});
  }


  return (
    <div className="w-[600px] h-[800px] bg-white flex flex-col rounded-lg shadow-lg relative px-6">
      <div className=" mt-[24px] gap-[24px] flex">
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
        onClick={handlePost}>
          发布
        </button>
      </div>
    </div>
  )
}