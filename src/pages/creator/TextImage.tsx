import UploadImage from "@/services/uploadImg"
import { useSelector } from "react-redux";
import  {RootState}  from "@/store";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTitle, setContent, setImageUrl } from "@/store/modules/postStore";

export default function TextImage() {
  const { userInfo } = useSelector((state:RootState) => state.user);
  const userId = userInfo.uid;
  const [imgUrl, setImgUrl] = useState<string>('');
  const dispatch = useDispatch();
  

  // 上传图片的函数
  const handleClick = async () => {
    const img = await UploadImage(userId);  
    
    if (img !== '' && img !== undefined) {
      setImgUrl(img);
      dispatch(setImageUrl(img));
    } 
  };

  return (
    <div>
      {/* 上传图片按钮 */}
      {imgUrl===''?<button className="bg-gray-200 w-30 h-30 text-4xl mt-3 text-gray-500 cursor-pointer rounded-lg"
      onClick={()=>handleClick()}
      >+</button>:
      <img src={imgUrl} alt="上传的图片" className="w-30 h-30 mt-3 rounded-lg" />}
      
      <div className="mt-5 mx-auto bg-gray-200 h-[300px] rounded-lg">
        {/* 输入标题 */}
        <div className="pt-2 pl-2 h-[30px]">
          <input type="text" placeholder="标题" className="focus:outline-none w-full"
          onChange={e => dispatch(setTitle(e.target.value))}>
          </input>
        </div>
        <hr className="w-full border-gray-300 mt-2  " />

        {/* 输入正文 */}
        <div className="pt-2 pl-2 h-[260px]">
          <textarea placeholder="正文" maxLength={500} className="focus:outline-none w-full h-full resize-none" 
          onChange={e => dispatch(setContent(e.target.value))}>
          </textarea>
        </div>
        
      </div>
      <div>
          <span className="mr-2">关联社区</span>
          <button className="bg-gray-200 w-25 h-10 text-l mt-2 text-gray-500 cursor-pointer rounded-lg">+添加社区</button>
        </div>
    </div>
  )}