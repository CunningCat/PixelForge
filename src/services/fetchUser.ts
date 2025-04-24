import { User } from "@/types/user";
import { supabase } from "@/lib/supabaseClient";


export async function fetchUserFromSupabase(): Promise<User | null> {
  const {
    data: session,
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session.session?.user) {
    console.error('No session found:', sessionError);
    return null;
  }

  const userId = session.session.user.id;

  const { data, error } = await supabase
    .from('profiles')
    .select('id, name, avatar_url')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    avatar_url: data.avatar_url,
  };
}