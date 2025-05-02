
// import { useState } from "react";
import logo from "../../assets/LOGO1.png"
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
    
  ]
  const getReviewColor = (score: string) => {
    if (+score >= 8) return 'text-green-500';
    if (+score >= 5) return 'text-yellow-500';
    return 'text-red-500';
  };
  
  return (
    <div className=" text-white font-pixel ">
      <div className="flex flex-col">
        <div className="div-gap">游戏测评</div>
        <div className="flex items-center justify-center w-auto mt-10">
            {/* 游戏测评列表 */}
            {reviewList.map((item, index) => (
              <div key={index} className="relative h-90 w-160">
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
            ))
            }
          
        </div>
      </div>
    </div>
  );
}