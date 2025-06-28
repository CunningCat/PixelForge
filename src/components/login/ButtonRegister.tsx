import { useNavigate } from "react-router";
import GlowRippleButton from "../ui/GlowRippleButton";
export default function ButtonRegister() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoRegister = () => {
    navigate("/register");
  };
  return (
    <span className="flex gap-4">
      <GlowRippleButton text="Register" onClickMethod={gotoRegister} />
      <GlowRippleButton text="Login" onClickMethod={gotoLogin} />
    </span>
  );
}
