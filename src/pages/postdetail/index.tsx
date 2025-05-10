import Header from "../home/Header"
import "@/pages/postdetail/css/index.css"
import CommentBox from "@/components/commentbox/CommentBox"
import Footer from "@/pages/home/Footer";
import { useParams } from "react-router"; 
import {getPostInfo} from "@/services/getPostInfo";
import { useEffect,useState } from "react";
import { toast } from "sonner";
import { PostDownloadInfo } from "@/types/postdownloadinfo";
export default function PostDetail() {
  const { id } = useParams();
  const [postInfo,setPostInfo] = useState<PostDownloadInfo>();
  useEffect(() => {
    if(id)
    {
      getPostInfo(id)
      .then((res) => {
        if(res.isSuccess && res.data )
        {
          setPostInfo({
            title:res.data.title,
            content:res.data.content,
            image_url:res.data.image_url,
            created_time:res.data.created_time,
            post_id:res.data.id,
            author:res.data.author,
            likes:res.data.likes,
            commentnum:res.data.commentnum
          });
          
        }
        else
        {
          toast("获取帖子失败", {
            description: res.error,
            action: {
              label: "关闭",
              onClick: () => console.log("关闭"),
            },
          });
        }
      })
    }
      
  },[id]);
  

  return (
    <div className="flex flex-col relative bg-white min-h-screen">
      <main className="flex-grow">
        <div className="sticky top-0 z-10">
          <Header className="bg-white"/>
        </div>
        {/* 图片和标题 */}
        <div className="h-50 w-full relative" >
          <img className="w-full h-full bg-amber-100"  alt="Pixel Art Background" src={postInfo?.image_url}/>
          <div className="absolute top-1/2 left-1/20">
            <h1 className=" text-4xl">{postInfo?.title}</h1>
            <span className=" text-stone-500">发布时间:{postInfo?.created_time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者:{postInfo?.author}</span>
          </div>
        </div>
        {/* 文章正文 */}
        <article className="flex justify-center items-center px-40 pt-10 mx-auto">
            <div className="text-2xl">
            {postInfo?.content}
            </div>
        </article>
        <hr className="w-full border-gray-300 mt-20  " />
        {/* 评论 */}
        <CommentBox />
      </main>
      <Footer />
    </div>
  )
}