import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router";
export default function ButtonReturn() {
  const navigate = useNavigate();
  return(
  <div className="flex bg-gray-200 rounded-2xl p-2 w-fit mt-5 cursor-pointer" onClick={()=>navigate(-1)}>
    <Undo2 />
    <span className="w-full">返回</span>
  </div>
  ) 
}