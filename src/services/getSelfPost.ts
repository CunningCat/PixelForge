import {supabase} from "@/lib/supabaseClient";
import dayjs from 'dayjs';
export default async function getSelfPost( uid:string ) 
{
  
  const { data, error } = await supabase
    .from('posts')
    .select('title, content, image_url,created_time,post_id:id,author,commentnum,likes')
    .eq('user_id', uid)
    .order('created_time', { ascending: false })
    .limit(5);
  if (error) {
    console.error("获取帖子失败", error);
    return null;
  }

  const formattedData = data.map(item => {
      return {
        ...item,
        created_time : dayjs(item.created_time).format('YYYY-MM-DD HH:mm:ss'),
      };
    });

  return formattedData;
}