import Logo from "../../assets/Logo.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { supabase } from '../../lib/supabaseClient';
import { useState } from "react";
import { useNavigate } from "react-router"
import { toast } from "sonner"
export default function Register () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmReading, setConfirmReading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const navigate = useNavigate()
  const gotoLogin = () => {
    navigate('/login')
  }
  
  //用户名验证
  function validateUsername(username: string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(username.trim()));
  }

  //密码验证
  function validatePassword(password: string) {
    const passwordRegex = /^[A-Za-z\d@$!%*#?&]{6,}$/;
    setIsValidPassword(passwordRegex.test(password));
  }

  //调用注册
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    if(!confirmReading){
      toast("注册失败", {
        description: "请同意用户协议",
        action: {
          label: "关闭",
          onClick: () => console.log("关闭"),
        },
    });
      return
    }
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast("注册失败", {
        description: error.message,
        action: {
          label: "关闭",
          onClick: () => console.log("关闭"),
        },
      });
      
    } else {
      toast("注册成功", {
        description: "请前往邮箱验证",
        action: {
          label: "关闭",
          onClick: () => console.log("关闭"),
        },
      });
      gotoLogin()
    }
  };

  return (
    <div className=" min-h-screen w-screen flex items-center justify-center overflow-auto">
      <form className="w-[476px] h-[582px] bg-amber-50 mt-10 rounded-2xl px-8" onSubmit={handleRegister}>
        <img src={Logo} alt="logo" className="h-40 mt-10 mx-auto" />
        <h1 className="text-3xl mb-5">注册</h1>
        <label className="text-l mt-5 text-gray-500">账号</label>
        <div className="mb-5">
          <Input  className=" w-full placeholder:text-gray-400" placeholder="@example.com"  onBlur={() => validateUsername(email)} onChange={(e) => setEmail(e.target.value)}/>
          {!isValidEmail && (
          <p className="text-red-500 text-sm">用户名必须是邮箱格式</p>)}
        </div>
        
        <label className="text-l mt-2 mb-5 text-gray-500">密码</label>
        <div className="mb-5">
          <Input  className=" w-full " onChange={(e) => setPassword(e.target.value)} onBlur={() => validatePassword(password)}/>
          {!isValidPassword && (
          <p className="text-red-500 text-sm">密码至少6位数字、字母或字符组合</p>)}
        </div>
        <span>
          <Checkbox className=" mt-2 mr-2" onCheckedChange={() => setConfirmReading(!confirmReading)}/>
          <label className="text-l mt-5 text-gray-500">已阅读并同意</label>
          <a href="#" className="text-l mt-5 text-blue-500">《用户协议》</a>
        </span>
        
        <Button className="w-full mt-5 bg-white hover:bg-gray-200 text-black cursor-pointer" type="submit">注册</Button>
      </form>
      
    </div>
  )
}