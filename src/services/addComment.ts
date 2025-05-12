import { supabase } from '@/lib/supabaseClient';
export default async function addComment({...prop}) {
  const { error } = await supabase.from("comments").insert([
    {
      content: prop.content,
      post_id: prop.post_id,
      user_id: prop.user_id,
      user_avatar: prop.user_avatar,
      author: prop.author,
    },
  ]);
  if (error) {
    console.error("插入评论失败", error);
    return false;
  }
  
  return true;
}
