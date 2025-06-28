import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router";
export default function DropdownMenu({ isOpen }: { isOpen: boolean }) {
  const nav = useNavigate();
  return (
    <div
      className="w-24 py-2 bg-gray-200  rounded-lg absolute right-0 z-10 mt-40 text-black"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <button
        onClick={() => nav("/profile")}
        className="block cursor-pointer w-full text-center py-2 hover:text-orange-200"
      >
        个人信息
      </button>
      <hr className="w-full border-slate-600 " />
      {/* 点击登出 */}
      <button
        className="block w-full text-center py-2 hover:text-orange-200 cursor-pointer"
        onClick={async () => {
          localStorage.removeItem("userId");
          await supabase.auth.signOut();
          window.location.reload();
        }}
      >
        登出
      </button>
    </div>
  );
}
