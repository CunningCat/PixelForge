
import { supabase } from '@/lib/supabaseClient';

export default function UploadAvatar(uid:string):Promise<string>  {
  return new Promise((resolve) =>{
  if (!uid) {
    console.error('userId 不能为空');
    return;
  }
  
  // 创建一个本地文件选择器
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  // 监听文件选择
  input.onchange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (!target.files || target.files.length === 0) {
      console.log('没有选择任何文件');
      return;
    }

    const file = target.files[0];
    const filePath = `${uid}/${Date.now()}-${file.name}`;

    const { error } = await supabase
      .storage
      .from('post-image')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('上传失败:', error.message);
      alert('上传失败: ' + error.message);
      return;
    }
    // 获取文件的签名 URL（如果需要签名 URL）
    const { data: signedUrlData, error: signedUrlError } = await supabase
    .storage
    .from('post-image') 
    .createSignedUrl(filePath, 60 * 60 * 24 * 365); // url1年有效期

    if (signedUrlError) {
      console.error('生成签名URL失败:', signedUrlError.message);
      resolve(''); // 生成签名 URL 失败，返回空字符串
      return;
    }
    

    console.log('上传图片成功');
    
    {const {
      
      error
    } = await supabase
      .from('user_info')
      .update({ avatar_url: signedUrlData.signedUrl })
      .eq('uid', (await supabase.auth.getUser()).data?.user?.id);
    
    if (error) {
      console.error('更新失败:', error.message);
      
    }}

    // 这里可以返回或处理 URL
    resolve(signedUrlData.signedUrl);
  };

  // 自动弹出文件选择框
  input.click();
});
}