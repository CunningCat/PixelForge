import {  useState } from "react";
import  TextImage  from "./TextImage";
import  Article  from "./Article";
import createPost from "@/services/createPost";
import { useSelector,useDispatch } from "react-redux";
import  {RootState}  from '@/store';
import { setUid } from "@/store/modules/postStore";
import {  useNavigate } from "react-router";
import {toast} from "sonner"
import { useAsyncLock } from "@/hooks/useAsynLock";
import { Undo2,X } from "lucide-react";
import { setCommunity } from "@/store/modules/postStore";

//创作者编辑器
export function Editor({setshowSelectCommunity}:{setshowSelectCommunity:()=>void}) {
  const tabs = ["发布图文", "发布文章"];
  const [activeIndex, setActiveIndex] = useState(0);
  
  const {post} = useSelector((state:RootState) => state);
  const {userInfo} = useSelector((state:RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {withLock,locked} = useAsyncLock();
  
  //设置uid
  dispatch(setUid(userInfo.uid));
  //发布帖子
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
  //取消选择社区
  const cancelSelectCommunity = () => {
    dispatch(setCommunity(''));
   
  }

  return (
    <div className="w-150 h-200 bg-white flex flex-col rounded-lg shadow-lg relative px-6">
      <div className="flex bg-gray-200 rounded-2xl p-2 w-fit mt-5 cursor-pointer" onClick={()=>navigate(-1)}>
        <Undo2 />
        <span className="w-full">返回</span>
      </div>
      <div className=" mt-3 gap-6 flex">
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
      <div>
        <span className="mr-2">关联社区</span>
        {post.postInfo.community===''?
        <button className="bg-gray-200 w-25 h-10 text-l mt-2 text-gray-500 cursor-pointer rounded-lg"
        onClick={()=>setshowSelectCommunity()}>+添加社区
        </button>:
        <div className="inline-block h-10 text-l mt-2 bg-gray-200 text-gray-500 cursor-pointer rounded-lg" onClick={() => cancelSelectCommunity()}>
          <div className="flex items-center justify-between h-full pl-2">
            <button className="h-full flex items-center">
              {post.postInfo.community}
            </button>
            <X className="inline" />
          </div>
        </div>
        }
        
      </div>
      <div className="flex mt-4 absolute bottom-5 right-5">
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-10 rounded-lg cursor-pointer"
        onClick={handlePost} disabled={locked}>
          发布
        </button>
      </div>
      
    </div>
  )
}