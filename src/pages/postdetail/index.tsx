import Header from "../home/Header"
import "@/pages/postdetail/css/index.css"
import CommentBox from "@/components/commentbox/CommentBox"
import Footer from "@/pages/home/Footer";
import { useParams } from "react-router"; 
import {getPostInfo} from "@/services/getPostInfo";
import { useEffect,useState } from "react";
import { toast } from "sonner";
import { PostDownloadInfo } from "@/types/postdownloadinfo";
import { CommentList } from "@/components/commentbox/CommentList";


export default function PostDetail() {
  const { post_id } = useParams();
  const [postInfo,setPostInfo] = useState<PostDownloadInfo>();
  const [CommentListRefresh,SetCommentListRefresh] =useState(0)
  

  const handleRefreshCommentListKey = ()=>{
    SetCommentListRefresh(CommentListRefresh+1);
  } 
  useEffect(() => {
    
    if(post_id)
    {
      getPostInfo(post_id)
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
            commentnum:res.data.commentnum,
            community_category:res.data.community_category
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
      
  },[post_id]);
  

  return (
    <div className="flex flex-col relative bg-white min-h-screen">
      <main className="flex-grow">
        <div className="sticky top-0 z-10">
          <Header className="bg-white"/>
        </div>
        {/* 图片和标题 */}
        <div className="h-50 w-full relative" >
          
          <div className="absolute top-1/2 left-1/20">
            <h1 className=" text-4xl">{postInfo?.title}</h1>
            <span className=" text-stone-500 block mt-2">发布时间:{postInfo?.created_time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者:{postInfo?.author}</span>
          </div>
        </div>
        {/* 文章正文 */}
        <article className="flex flex-col justify-center items-center px-40 pt-10 mx-auto">
            {postInfo?.image_url && 
            <div className="flex justify-center items-center w-100  bg-gray-100">
              <img className="" src={postInfo?.image_url} alt={postInfo?.image_url} />
            </div>
            }
            <p className="text-2xl text-left w-full">
            {postInfo?.content}
            </p>
        </article>
        {postInfo?.community_category &&
        <div className="h-10 ml-40 mt-10">
          <div className="flex items-center p-2">
            <span className="bg-gray-100 p-2 rounded-2xl"># {postInfo?.community_category}</span>
          </div>
        </div>}
        {/* 分割线 */}
        <hr className="w-full border-gray-300 mt-10  " />
        {/* 评论 */}
        <CommentBox post_id={post_id} refreshCommentList={handleRefreshCommentListKey}/>
        <CommentList post_id={post_id} refreshCommentList={CommentListRefresh}/>
      </main>
      <Footer />
    </div>
  )
}