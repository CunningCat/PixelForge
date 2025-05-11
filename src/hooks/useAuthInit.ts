import { useEffect } from "react";
import { fetchUserFromSupabase } from "@/services/fetchUser";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/modules/userStore";

export const useAuthInit = () => {
 const dispatch = useDispatch();
  useEffect(() => {
    //页面复位
    window.scrollTo(0, 0);
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
};