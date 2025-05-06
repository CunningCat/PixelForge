import { supabase } from "@/lib/supabaseClient";
export async function updateUserName(newName: string) {
  const {
    data,
    error
  } = await supabase
    .from('user_info')
    .update({ name: newName })
    .eq('uid', (await supabase.auth.getUser()).data?.user?.id);
  
  if (error) {
    console.error('更新失败:', error.message);
    return { success: false, error };
  }

  return { success: true, data };
}