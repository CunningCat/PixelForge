import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/types/user"
import DropdownMenu from "./DropdownMenu"
import { useState } from "react"
export function UserAvatar( {user}: {user: User} ) {
  const [isOpen, setIsOpen] = useState(false)

  const handleHover = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='hover: cursor-pointer w-15 h-15 flex items-center justify-center mt-0' >
      <Avatar className="w-3/4 h-3/4">
        <AvatarImage src= {user.avatar_url} />
      </Avatar>
      <DropdownMenu isOpen={isOpen}/>
    </div>
  )}