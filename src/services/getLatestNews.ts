import { supabase } from "@/lib/supabaseClient";
import dayjs from "dayjs";

export async function getLatestNews(){
  

  const { data, error } = await supabase
    .from('posts')
    .select('title, content, image_url,created_time,post_id:id,author')
    .order('created_time', { ascending: false })
    .limit(5);

  if (error) {
    console.error('从 Supabase 获取最新帖子失败：', error.message);
    return null;
  }
  //对返回的时间进行格式化处理
  const formattedData = data.map(item => {
    return {
      ...item,
      created_time : dayjs(item.created_time).format('YYYY-MM-DD HH:mm:ss'),
    };
  });

  return formattedData;
}