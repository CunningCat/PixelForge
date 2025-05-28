import Button_communityitem from "./Button_communityitem";
import computer from "@/assets/fa8928d8fa5a73dde6fab2a4e0056b0f.png"
import lol from "@/assets/800464ac7d873632846298cb37e5b0bb.png"
import cs2 from "@/assets/17490d786f2942df8ea361c907c49d9c.jpeg"
export default function CommunityList() {
  return (
    <div className="">
      <ul className="flex gap-4">
        <li>
          <Button_communityitem src={computer} name="数码硬件" urlname="computer" />
        </li>
        <li>
          <Button_communityitem src={lol} name="英雄联盟" urlname="lol" />
        </li>
        <li>
          <Button_communityitem src={cs2} name="CS2" urlname="cs2" />
        </li>
      </ul>
    </div>
  );
}