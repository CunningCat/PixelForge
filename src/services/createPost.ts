import { supabase } from '@/lib/supabaseClient';
import { PostInfo } from '@/types/postinfo';
export default async function createPost({PostInfo:postinfo}: {PostInfo: PostInfo}) {
  
  const { data, error } = await supabase.from('posts').insert([
    {
      user_id: postinfo.uid,
      title: postinfo.title,
      content: postinfo.content,
      image_url: postinfo.imageUrl,
      
    }
  ]);
  console.log(data);
  if (error) {
   
    console.error('插入帖子失败：', error.message);
    
    return null;
  }

  console.log('插入成功：', data);
  return data;
}