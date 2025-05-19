import {supabase} from "../lib/supabaseClient";

export async function likePost(postId: string, userId: string) {
  const { data: existingLike, error: likeQueryError  } = await supabase
  .from('post_likes')
  .select('*')
  .eq('post_id', postId)
  .eq('user_id', userId)
  .maybeSingle();

  if (likeQueryError) {
      console.error('Error checking like:', likeQueryError);
      return {'success': false, 'error': likeQueryError.message};
    }

  if (existingLike) {
    console.log('User has already liked this post.');
    return {'success': false,'error': 'User has already liked this post'}; // 已经点过赞了，不做处理
  }

   // 插入 post_likes
  const { error: insertError } = await supabase
    .from('post_likes')
    .insert({ post_id: postId, user_id: userId });

  if (insertError) {
    console.error('Error inserting like:', insertError);
    return {'success': false, 'error': insertError.message};
  }
  
  const { error: updateError } = await supabase
    .rpc('increment_likes', { p_post_id: postId });
    

  if (updateError) {
    console.error('Error updating post likes:', updateError);
    return {'success': false, 'error': updateError.message};
  }

  return {'success': true};


}