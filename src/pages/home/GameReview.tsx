
// import { useState } from "react";
import horizon from "@/assets/horizon.png"
import arrowleft from "@/assets/arrow-left.png"
import arrowright from "../../assets/arrow-right.png"
import cs2 from "../../assets/csgo2.png"
import last from "../../assets/last.jpg"
import light from "../../assets/light.jpg"
import { useEffect, useState,useRef } from "react";



// interface Review {
//   image_url: string;
//   title: string;
//   subtitle: string;
//   review: string;
// }
export default function GameReview() {
  // const [reviewList, setReviewList] = useState<Review[]>();
  
  const reviewList =[
    {
      "image_url": horizon,
      "title": "《极限竞速：地平线5》",
      "subtitle": "目前最优秀的开放世界赛车游戏，迎来了最盛大的落幕仪式",
      "review": "8.5"
    },
    {
      "image_url": cs2,
      "title": "CS2",
      "subtitle": "拳打三角洲，脚踩瓦学弟，《CS2》怎么就越骂越火了？",
      "review": "7.6"
    },
    {
      "image_url": light,
      "title": "《光与影：33号远征队》",
      "subtitle": "从育碧出来的法国人，正在教日本人怎么做JRPG",
      "review": "8.5"
    },
    {
      "image_url": last,
      "title": "《最后生还者2》PC重制版",
      "subtitle": "为什么说这是一款很难被超越的游戏？",
      "review": "9.1"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(640);
  const [gap,setGap] = useState(120); // 卡片之间的距离 px
  const totalWidth = cardWidth + gap;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
 
 
 //开启定时器，鼠标移出时
  const startTimer = () => {
    stopTimer();
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => prev===reviewList.length - 1 ? 0 :prev + 1);}
    , 5000);
    console.log("开启定时器当前序号：",intervalRef.current);
  };
  //关闭定时器，鼠标移入时
  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };


  useEffect(() => {
    startTimer();
    return () => {
      stopTimer(); // 清除定时器
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      setCardWidth(width < 640 ? 320 : 640);
      setGap(width < 640 ? 60 : 120);
    };
    updateWidth(); // 初始设置
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  



  
  // 上一张卡片
  const handlePrev = () => {
    setCurrentIndex(prev => prev===0 ? reviewList.length - 1 : prev - 1);
  };
  // 下一张卡片
  const handleNext = () => {
    setCurrentIndex(prev => prev===reviewList.length - 1 ? 0 :prev + 1);
  };

  const getReviewColor = (score: string) => {
    if (+score >= 8) return 'text-green-500';
    if (+score >= 5) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <div className=" text-white font-pixel ">
      <div className="flex flex-col relative">
        <div className="div-gap">游戏测评</div>
        <div className="flex items-center justify-center w-auto mt-10" >
          <div className="flex items-center justify-center w-300 h-100 relative overflow-hidden" onMouseEnter={stopTimer} onMouseLeave={startTimer}>
             {/* 箭头 */}
            <div className="absolute w-15 h-30 left-0 top-1/2 cursor-pointer bg-black/30 flex items-center justify-center rounded-md -translate-y-1/2 z-10"
            onClick={handlePrev}>
              <img src={arrowleft}  alt="left" />
              
            </div>
            <div className="absolute w-15 h-30 right-0 top-1/2 cursor-pointer bg-black/30 flex items-center justify-center rounded-md -translate-y-1/2 z-10"
            onClick={handleNext}>
              <img src={arrowright }  alt="right" />
            </div>
            {/* 滑动区域 */}
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(calc(50% - ${currentIndex * totalWidth + cardWidth / 2}px))`,
                gap: `${gap}px`,
                 
              }}
              >
            {/* 游戏测评列表 */}
            {reviewList.map((item, index) => {
              const isActive = index === currentIndex;
              return(
              
                <div key={index} className=" relative overflow-clip"
                  style={{
                  width: `${cardWidth}px`,
                  height: `${cardWidth/16*9}px`,
                  transform: `scale(${isActive ? 1 : 0.85})`,
                  transition: "transform 1s ease",
              }}>
                {/* 背景图 */}
                <img src={item?.image_url} alt="Game Review" className=" w-full absolute opacity-50 " />
                <div className="h-1/2 "/>
                <div className="absolute w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-50 flex flex-wrap z-5">
                </div>
                <div className="absolute w-full h-1/2  flex flex-wrap z-10">
                  {/* 标题 */}
                  <span className="game-title ml-2 mt-2 text-xl text-white w-4/5 ">
                    {item.title}
                  </span>
                  {/* 评分 */}
                  <span className={`game-review  text-6xl right-0 ml-auto mr-8 absolute ${getReviewColor(item.review)}`}>
                    {item.review}
                  </span>
                  {/* 副标题 */}
                  <div className="w-full h-full ml-2 mt-3">
                    {item.subtitle}
                
                </div>
                </div>
              </div>
            )}
          )
            }
            </div>
          </div> 
          
        </div>
      </div>
    </div>
  );
}