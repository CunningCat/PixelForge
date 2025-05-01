
import img from "../../assets/Pixel-banner.png"
import "@/pages/home/css/index.css"
import { useEffect } from "react";
import { useState } from "react";
import { getLatestNews } from "@/services/getLatestNews";

interface News {
  title: string;
  content: string;
  image_url: string;
  created_time: string;
}


export function TheLastst() {
  const [latestNews, setLatestNews] = useState<News[]>([]);

  
  
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
    <div className="flex h-screen flex-col items-center">
      <div className="text-4xl">
      Catch the Latest
      </div>
      {latestNews.length === 0 ? <div>加载中...</div>:
      <div className="flex mt-4 gap-20 mx-20">
      
        <div className="w-1/2 h-1/2 flex flex-col gap-2">
          <img src={img} ></img>
          <div className="news">最新消息</div>
          <div className="text-xl">{latestNews[0].title}</div>
          <div className="sub-headline">{latestNews[0].content}</div>
          <div className="time">{latestNews[0].created_time}</div>
        </div>
        <div className="w-1/2 h-1/2 flex flex-col gap-2 ">
          <ul>
            {latestNews.slice(1, latestNews.length).map((item, index) => (
              <li key={index} className="flex flex-col gap-2 mb-4">

                <div className="text-xl">{item.title}</div>
                <div className="sub-headline">{item.content}</div>
                <div className="time">{item.created_time}</div>
                <hr className="w-full border-gray-300 mt-2" />
              </li>
            ))}
          </ul>
        </div>
    
      </div>
    }
    </div>
  );
}