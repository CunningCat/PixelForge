import { supabase } from "@/lib/supabaseClient";
import dayjs from "dayjs";


type PostWithUserInfo = {
  title: string;
  content: string;
  image_url: string;
  created_time: string;
  post_id: string;
  author: string;
  commentnum: number;
  likes: number;
  community_category: string;
  user_info?: {
    avatar_url?: string;
  };
};

export async function getCommunityNews(offset = 0, itemnum = 5,community_category:string) {
  
 
  const { data, error } = await supabase
    .from('posts')
    .select(`
    title,
    content,
    image_url,
    created_time,
    post_id:id,
    author,
    commentnum,
    likes,
    community_category,
    
    user_info (
      avatar_url
    )
  `)
    .order('created_time', { ascending: false })
    .eq('community_category',community_category)
    .range(offset, offset +itemnum -1);

  if (error) {
    console.error('从 Supabase 获取最新帖子失败：', error.message);
    return [];
  }
  //对返回的时间进行格式化处理
  const formattedData = (data as PostWithUserInfo[]).map(item => {
      return {
        ...item,
        created_time : dayjs(item.created_time).format('YYYY-MM-DD HH:mm:ss'),
        avatar_url: item.user_info?.avatar_url || '',
      };
    });

  return formattedData;
}