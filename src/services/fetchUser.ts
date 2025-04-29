import { User } from "@/types/user";
import { supabase } from "@/lib/supabaseClient";


export async function fetchUserFromSupabase(userId: string): Promise<User | null> {
  if (!userId) {
    console.error('传入的 userId 为空');
    return null;
  }

  const { data, error } = await supabase
    .from('user_info')
    .select('uid, name, avatar_url')
    .eq('uid', userId)
    .single();

  if (error) {
    console.error('从 Supabase 获取用户信息失败:', error.message);
    return null;
  }

  return {
    uid: data.uid,
    name: data.name,
    avatar_url: data.avatar_url,
  };
}