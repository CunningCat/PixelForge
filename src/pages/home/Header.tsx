import ButtonRegister from "../../components/login/button-register";
import  logo  from "../../assets/LOGO1.png";
import { useSelector } from "react-redux";
import  {RootState}  from '@/store';
import { UserAvatar } from "@/components/user/avatar";

//头部
export default function Header() {
  const {user} = useSelector((state: RootState) => state);
  
  return (
    <header className="py-6 px-4 flex justify-between items-center bg-gray-900 bg-opacity-80">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="h-10 " />
        <h1 className="text-3xl">PixelForge</h1>
      </div>
      <nav className="space-x-4 text-lg">
        <ul className="flex gap-6 items-center">
          
          <li><a href="#about" className="hover:text-yellow-400 hover:underline">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 hover:underline">Contact</a></li>
          {/* userinfo存在则显示头像，否则显示注册登录按钮 */}
          {user.userInfo.id!==0? <UserAvatar user={user.userInfo} /> :<ButtonRegister />}
        </ul>
        
      </nav>
    </header>
  );
}