import { useDispatch } from "react-redux";
import { setTitle, setContent} from "@/store/modules/postStore";


export default function Article() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="mt-5 mx-auto bg-gray-200 h-[500px] rounded-lg">
        {/* 标题 */}
        <div className="pt-2 pl-2">
          <input type="text" placeholder="标题" className="focus:outline-none w-full"
          onChange={e => dispatch(setTitle(e.target.value))}>
          </input>
        </div>
        <hr className="w-full border-gray-300 mt-2  " />
        {/* 正文 */}
        <div className="pt-2 pl-2">
          <textarea placeholder="正文" maxLength={500} className="focus:outline-none w-full h-[450px] resize-none" 
          onChange={e => dispatch(setContent(e.target.value))}>
          </textarea>
        </div>
        
      </div>
      
    </div>
  )}