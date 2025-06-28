import { supabase } from "@/lib/supabaseClient";
import { PostUploadInfo } from "@/types/postuploadinfo";
export default async function createPost({
  PostInfo: postinfo,
}: {
  PostInfo: PostUploadInfo;
}) {
  const { error } = await supabase.from("posts").insert([
    {
      user_id: postinfo.uid,
      title: postinfo.title,
      content: postinfo.content,
      image_url: postinfo.imageUrl,
      author: postinfo.author,
      community_category: postinfo.community,
    },
  ]);

  if (error) {
    console.error("插入帖子失败：", error.message);

    return null;
  }

  console.log("插入成功：");
  // 成功评论就添加经验
  const { error: expError } = await supabase.rpc("increment_user_exp", {
    uid: postinfo.uid,
    amount: 500,
  });

  if (expError) {
    console.error("增加经验失败", expError);

    return false;
  }

  return true;
}
