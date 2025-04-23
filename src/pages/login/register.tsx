import Logo from "../../assets/Logo.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { supabase } from '../../lib/supabaseClient';
import { useState } from "react";
import { useNavigate } from "react-router"

export default function Register () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate()
  const gotoLogin = () => {
    navigate('/login')
  }
  
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      
    } else {
      alert('注册成功，请去邮箱确认！');
      gotoLogin()
    }
  };

  return (
    <div className=" min-h-screen w-screen flex items-center justify-center overflow-auto">
      <form className="w-[476px] h-[582px] bg-amber-50 mt-10 rounded-2xl px-8" onSubmit={handleRegister}>
        <img src={Logo} alt="logo" className="h-40 mt-10 mx-auto" />
        <h1 className="text-3xl mb-5">注册</h1>
        <label className="text-l mt-5 text-gray-500">账号</label>
        <Input  className=" w-full mb-5"  onChange={(e) => setEmail(e.target.value)}/>
        <label className="text-l mt-2 mb-5 text-gray-500">密码</label>
        <Input  className=" w-full mb-5" onChange={(e) => setPassword(e.target.value)}/>
        <span>
          <Checkbox className=" mt-2 mr-2" />
          <label className="text-l mt-5 text-gray-500">已阅读并同意</label>
          <a href="#" className="text-l mt-5 text-blue-500">《用户协议》</a>
        </span>
        
        <Button className="w-full mt-5 bg-white hover:bg-gray-200 text-black cursor-pointer" type="submit">注册</Button>
      </form>
      
    </div>
  )
}