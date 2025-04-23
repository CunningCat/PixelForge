import {Button} from "@/components/ui/button"
import { useNavigate } from "react-router"
export default function ButtonRegister() {
  const navigate = useNavigate()
  const gotoLogin = () => {
    navigate('/login')
  }
  const gotoRegister = () => {
    navigate('/register')
  }
  return (
    <span>
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 cursor-pointer"
      onClick={gotoRegister}>Register</Button>
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 mx-2 cursor-pointer"
      onClick={gotoLogin}>Login</Button>
    </span>
    

  )
}