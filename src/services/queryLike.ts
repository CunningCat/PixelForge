import {supabase} from "../lib/supabaseClient";

export async function queryLike(postId:string,userId:string){ 
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
    
    return {'success': true};
  }
  else {
    return {'success': false};
  }
}
