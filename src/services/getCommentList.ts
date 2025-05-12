import { supabase } from "@/lib/supabaseClient";
import dayjs from "dayjs";
export default async function getCommentList({ post_id, itemnum =5 }: { post_id: string, itemnum?: number }) {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("post_id", post_id)
    .order("created_at", { ascending: false })
    .limit(itemnum);
  if (error) {
    console.error("获取评论失败", error);
    return false;
  }

  if (!data) {
    return [];
  }
  const formattedData = data.map(item => {
    return {
      ...item,
      created_at : dayjs(item.created_at).format('YYYY-MM-DD HH:mm:ss'),
    };
  });
  return formattedData ;
}