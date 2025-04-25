import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/types/user"
import  defaultAvatar  from "@/assets/mine-avater.svg"
export function UserAvatar( {user}: {user: User} ) {
  return (
    <Avatar>
      <AvatarImage src= {defaultAvatar ||user.avatar_url  } />
    </Avatar>
  )}