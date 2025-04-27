
import { supabase } from "@/lib/supabaseClient";
export default function DropdownMenu({isOpen}: {isOpen: boolean}) {
  
  return (
    <div className="w-24 py-2 bg-slate-800 rounded-lg absolute right-0 z-10 mt-40" style={{display: isOpen ? 'block' : 'none'}}>
      <a href="#" className="block w-full text-center py-2 hover:text-orange-200">个人信息</a>
      <hr className="w-full border-slate-600 " />
      {/* 点击登出 */}
      <a className="block w-full text-center py-2 hover:text-orange-200"
      onClick={async () => {localStorage.removeItem('userId');
        await supabase.auth.signOut();
        window.location.reload();
      }}
      >登出</a>
    </div>
  );
}