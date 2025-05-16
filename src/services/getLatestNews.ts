import { supabase } from "@/lib/supabaseClient";
import dayjs from "dayjs";

export async function getLatestNews(offset = 0, itemnum = 5) {
  
 
  const { data, error } = await supabase
    .from('posts')
    .select('title, content, image_url,created_time,post_id:id,author,commentnum,likes')
    .order('created_time', { ascending: false })
    .range(offset, offset +itemnum -1);

  if (error) {
    console.error('从 Supabase 获取最新帖子失败：', error.message);
    return [];
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