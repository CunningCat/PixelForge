import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import pixelBanner from '../../assets/Pixel-banner.png';
import { useEffect } from 'react';
import { fetchUserFromSupabase } from '@/services/fetchUser';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/modules/userStore';



export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    // 获取用户信息
    const userId = localStorage.getItem('userId') || '';
    if (userId) {
      const userClearId = JSON.parse(userId);
      fetchUserFromSupabase(userClearId)
        .then((user) => {
          if (user) {
            dispatch(setUser(user));
            console.log(user);
          } else {
            console.error('用户信息为空');
          }
        }
      )};
     
  },[dispatch]) ;
  
  return (
  <div className="min-h-screen bg-pixel bg-repeat text-white font-pixel">
    <Header />
    <main className="bannel">
      <img className="w-full" src={pixelBanner} alt="Pixel Art Background" />
      <Projects />
    </main>
    <About />
    <Footer />
  </div>);
      };