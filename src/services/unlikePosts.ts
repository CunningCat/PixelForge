import { supabase } from "@/lib/supabaseClient";

export async function unlikePost(postId: string, userId: string) {
  
   const { data: existingLike, error: likeQueryError } = await supabase
    .from('post_likes')
    .select('id')
    .eq('post_id', postId)
    .eq('user_id', userId)
    .maybeSingle();

  if (likeQueryError) {
    console.error('Error checking like:', likeQueryError);
    return {'success': false, 'error': likeQueryError.message};
  }

  if (!existingLike) {
    console.log('User has not liked this post yet.');
    return {'success': false,'error': 'User has not liked this post yet'};
  }

   // 删除点赞记录
  const { error: deleteError } = await supabase
    .from('post_likes')
    .delete()
    .eq('post_id', postId)
    .eq('user_id', userId);

  if (deleteError) {
    console.error('Error removing like:', deleteError);
    return {'success': false, 'error': deleteError.message};
  }

  // 更新帖子 likes -1
  const { error: updateError } = await supabase
    .rpc('decrement_likes', { p_post_id: postId });
    

  if (updateError) {
    console.error('Error decrementing like count:', updateError);
    return {'success': false, 'error': updateError.message};
  }

  return {'success': true};
}