

import "@/pages/home/css/index.css"
import { useEffect } from "react";
import { useState } from "react";
import { getLatestNews } from "@/services/getLatestNews";
import { useNavigate } from "react-router";
import { PostDownloadInfo } from "@/types/postdownloadinfo";
import Loadding from "@/components/Loading";


export function TheLastst() {
  const [latestNews, setLatestNews] = useState<PostDownloadInfo[]>([]);
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate(`/post/${latestNews[0].post_id}`);
  }
  useEffect(()=> {
    // 获取最新消息
    const fetchNews = async () => {
      const news = await getLatestNews();
      if (news) {
        setLatestNews(news);
      } else {
        console.error('获取最新消息失败');
      };
      
    };
    fetchNews();
      
  }, []);

  return(
    <div className="flex flex-col ">
      <div className="div-gap">
      最新动态
      </div>
      
      {latestNews.length === 0 ? <Loadding />:
      <div className="flex mt-4 gap-20 mx-20">
      
        <div className="w-1/2 h-1/2 flex flex-col gap-2 cursor-pointer" 
        onClick={handleNavigate}>
          <img src={latestNews[0].image_url} ></img>
          <div className="news">最新消息</div>
          <div className="TheLatest_title text-2xl">{latestNews[0].title}</div>
          <div className="sub-headline">
            <p className="line-clamp-3">{latestNews[0].content}</p>
            </div>
          <div className="time">{latestNews[0].created_time}</div>
        </div>
        <div className="w-1/2 h-1/2 flex flex-col gap-2 ">
          <ul>
            {latestNews.slice(1, latestNews.length).map((item, index) => (
              <li key={index} className="flex flex-col gap-2 mb-4">
                <div className="cursor-pointer" onClick={() => navigate(`/post/${item.post_id}`)}>
                  <div className="TheLatest_title">{item.title}</div>
                    <div className="sub-headline">
                      <p className="line-clamp-3">{item.content}
                      </p>
                    </div>
                  <div className="time">{item.created_time}</div>
                </div>
                
                <hr className="w-full border-gray-300 mt-4" />
              </li>
            ))}
          </ul>
        </div>
    
      </div>
    }
    </div>
  );
}