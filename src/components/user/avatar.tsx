import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/types/user"
export function UserAvatar( {user}: {user: User} ) {
  return (
    <Avatar>
      <AvatarImage src= {user.avatar_url || "../../assets/mine-avater.svg"} />)
    </Avatar>
  )}