import Header from "../home/Header";
import defaultimg from "@/assets/mine-avater.svg";
import fixImg from "@/assets/fix.png";
import UserArticlesList from "./UserArticlesList";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateUserName } from "@/services/updateUserName";
import { useState,useRef } from "react";
import { toast } from "sonner"
import { setUserName } from "@/store/modules/userStore";
import { useEffect } from "react";
export default function Profile(){
  const {user} = useSelector((state: RootState) => state);
  //用于切换编辑用户名的标签
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  //点击编辑按钮，切换为输入框，再次点击，提交输入内容到后台进行更新
  async function handleUpdateUserName (newName: string){
    if(!isEditing)
    {
      setIsEditing(true);
      
    }
    else
    {
      const res = await updateUserName(newName)
      if(res.success)
      {
        dispatch(setUserName(newName));
        toast("修改成功", {
          description: "完成",
          action: {
            label: "关闭",
            onClick: () => console.log("关闭"),
          }
        
        })
        setIsEditing(false);
      }
      else if(res.error)
      {
        toast("修改失败", {
          description: res.error.message,
          action: {
            label: "关闭",
            onClick: () => console.log("关闭"),
          }
        
      })
      }
    }
  }
  //用户名输入框出现时自动聚焦
  useEffect(() => {
    if (isEditing) {
    inputRef.current?.focus();
    }
  }, [isEditing]);
  return (
    <div className="flex flex-col ">
      <Header className="text-white"/>
      {/* 用户头像和名称 */}
      <div className="flex flex-col items-center mt-10 bg-white mx-40">
        <div className="bg-gray-600 w-full h-40"></div>
        <div className="bg-black w-full h-40">
          <div className="relative ml-10">
            <img src={(user.userInfo.avatar_url) || defaultimg} alt="" className="w-35 h-35 rounded-full  -translate-y-1/2" />
            <div className="text-2xl text-white absolute top-full -translate-y-15 mt-2 flex items-center justify-center">
              {/* 名字显示区和输入框 */}
              {isEditing?<input type="text" maxLength={15} className="focus:outline-none bg-gray-50/10" onBlur={() => setIsEditing(false)} ref={inputRef} defaultValue={user.userInfo.name}></input>:
              <span>{user.userInfo.name}</span>}
              <button className=" ml-2 w-10 h-10 bg-cover cursor-pointer" style={{ backgroundImage: `url(${fixImg})` }}
              onClick={() => handleUpdateUserName(inputRef.current?.value || '')}>
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <UserArticlesList/>
    </div>
    
  );
}