import { supabase } from "@/lib/supabaseClient";

export default async function submitComment(postId: string, userId: string, content: string) {
  let isSuccess = true;
  const { error } = await supabase
    .from("comments")
    .insert([
      {
        post_id: postId,
        user_id: userId,
        content: content,
      },
    ]);

  if (error) {
    isSuccess = false;
    console.error("插入评论失败", error);
    return {isSuccess,error};
  }

  return {isSuccess};
}
