
// import { useState } from "react";
import logo from "../../assets/LOGO1.png"
import arrowleft from "@/assets/arrow-left.png"
import arrowright from "../../assets/arrow-right.png"
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
      "image_url": {logo},
      "title": "Elden Ring: A Masterpiece of Open-World Design",
      "subtitle": "FromSoftware's most ambitious title yet",
      "review": "8.0"
    },
    {
      "image_url": {logo},
      "title": "Elden Ring: A Masterpiece of Open-World Design",
      "subtitle": "FromSoftware's most ambitious title yet",
      "review": "8.0"
    },
    {
      "image_url": {logo},
      "title": "Elden Ring: A Masterpiece of Open-World Design",
      "subtitle": "FromSoftware's most ambitious title yet",
      "review": "8.0"
    },
    {
      "image_url": {logo},
      "title": "Elden Ring: A Masterpiece of Open-World Design",
      "subtitle": "FromSoftware's most ambitious title yet",
      "review": "8.0"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 640; // 每张卡片宽度 px
  const gap = 120; // 卡片之间的距离 px
  const totalWidth = cardWidth + gap;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    
  useEffect(() => {
    startTimer();
    return () => {
      stopTimer(); // 清除定时器
    };
  }, []);

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
              
              <div key={index} className="w-160 h-75 relative"
              style={{
                transform: `scale(${isActive ? 1 : 0.85})`,
                transition: "transform 1s ease",
              }}>
                {/* 背景图 */}
                <img src={logo} alt="Game Review" className=" h-full absolute" />
                <div className="h-1/2 "/>
                <div className="absolute w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-50 flex flex-wrap">
                  {/* 标题 */}
                  <span className="game-title ml-2 mt-2 text-xl text-white w-4/5">
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