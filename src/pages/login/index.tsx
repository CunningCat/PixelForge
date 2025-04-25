import Logo from "../../assets/Logo.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { supabase } from '../../lib/supabaseClient';
import { useState } from "react";


export default function Login () {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const gotoRegister = () => {
    navigate('/register')
  }
  const gotoHome = () => {
    navigate('/')
  }

  //登录验证逻辑
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(`登录失败: ${error.message}`);
    } else {
      alert('登录成功！');
      console.log('用户信息:', data.user);
      //登录成功后存入用户id到localStorage
      localStorage.setItem('userId', JSON.stringify(data.user.id));
      gotoHome()
    }
  };


  return (
    <div className=" min-h-screen w-screen flex items-center justify-center overflow-auto">
      <form className="w-[476px] h-[582px] bg-amber-50 mt-10 rounded-2xl px-8"
      onSubmit={handleLogin}>
        <img src={Logo} alt="logo" className="h-40 mt-10 mx-auto" />
        <h1 className="text-3xl mb-5">登录</h1>
        <label className="text-l mt-5 text-gray-500">账号</label>
        <Input  className=" w-full" onChange={(e) => setEmail(e.target.value)}/>
        <label className="text-l mt-2 text-gray-500">密码</label>
        <Input  className=" w-full" onChange={(e) => setPassword(e.target.value)}/>
        <Button className="w-full mt-5 bg-amber-400 hover:bg-amber-500 cursor-pointer" type="submit">登录</Button>
        <Button className="w-full mt-5 bg-white hover:bg-gray-200 text-black cursor-pointer"
        onClick={gotoRegister}>注册</Button>
      </form>
    </div>
  )
}