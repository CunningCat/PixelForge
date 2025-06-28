import ButtonRegister from "../../components/login/ButtonRegister";
import logo from "../../assets/LOGO1.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { UserAvatar } from "@/components/user/UserAvatar";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useEffect, useState } from "react";

interface HeaderProps {
  className?: string;
}

//头部
export default function Header({ className = "" }: HeaderProps) {
  const { user } = useSelector((state: RootState) => state);
  const navigate = useNavigate();
  const [showLoginButton, setShowLoginButton] = useState(true);
  const createHandler = () => {
    if (user.userInfo.uid === "")
      toast("请先登录", {
        action: {
          label: "关闭",
          onClick: () => console.log("关闭"),
        },
      });
    else navigate("/creator");
  };
  useEffect(() => {
    if (user.userInfo.uid === "") setShowLoginButton(true);
    else setShowLoginButton(false);
  }, [user.userInfo.uid]);
  return (
    <header
      className={`py-2 px-4 h-20 flex justify-between items-center  bg-opacity-80    ${className}`}
    >
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="h-10 " />
        <h1 className="title-text">PixelForge</h1>
      </div>
      <nav className="space-x-4 text-lg ">
        <ul className="flex title-list items-center btn-text">
          <li>
            <button
              onClick={() => navigate("/post")}
              className="hover:text-yellow-400 hover:underline cursor-pointer"
            >
              最新帖子
            </button>
          </li>

          <li>
            <button
              className="hover:text-yellow-400 hover:underline cursor-pointer"
              onClick={createHandler}
            >
              创作者中心
            </button>
          </li>
          {/* userinfo存在则显示头像，否则显示注册登录按钮 */}
          {showLoginButton ? (
            <ButtonRegister />
          ) : (
            <UserAvatar user={user.userInfo} />
          )}
        </ul>
      </nav>
    </header>
  );
}
