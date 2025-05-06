import ButtonRegister from "../../components/login/ButtonRegister";
import  logo  from "../../assets/LOGO1.png";
import { useSelector } from "react-redux";
import  {RootState}  from '@/store';
import { UserAvatar } from "@/components/user/UserAvatar";
import { useNavigate } from "react-router";


interface HeaderProps {
  className?: string;
}

//头部
export default function Header({ className = "" }:HeaderProps){
  const {user} = useSelector((state: RootState) => state);
  const navigate = useNavigate()
  return (
    <header className={`py-6 px-4 flex justify-between items-center  bg-opacity-80 ${className}`}>
      <div className="flex items-center space-x-4 cursor-pointer" onClick={() =>navigate('/')}>
        <img src={logo} alt="logo" className="h-10 " />
        <h1 className="text-3xl">PixelForge</h1>
      </div>
      <nav className="space-x-4 text-lg">
        <ul className="flex gap-10 items-center">
          
          <li><a href="#about" className="hover:text-yellow-400 hover:underline">About</a></li>
          <li><button onClick={() =>navigate('/content')} className="hover:text-yellow-400 hover:underline cursor-pointer">Content</button></li>
        
          <li><button  className="hover:text-yellow-400 hover:underline cursor-pointer"
          onClick={() =>navigate('/creator')}>创作者中心</button></li>
          {/* userinfo存在则显示头像，否则显示注册登录按钮 */}
          {user.userInfo.uid!==''? <UserAvatar user={user.userInfo}/> :<ButtonRegister />}
        </ul>
        
      </nav>
    </header>
  );
}