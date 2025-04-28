
import img from "../../assets/Pixel-banner.png"
import "@/pages/home/css/index.css"
export function TheLastst() {
  const lastContent = [
    {
      title: "PixelForge是一个游戏资讯分享平台0",
      content: "我们相信，创作是一个不断探索和尝试的过程。无论你是游戏开发者、艺术家还是玩家，我们都欢迎你在PixelForge上分享你的创作和经验。我们希望通过这个平台，能够激发更多人的创作热情，让更多的人参与到游戏艺术的创作中来。",
      img: img,
      time: "2025-04-08",
    },
    {
      title: "PixelForge是一个游戏资讯分享平台1",
      content: "我们相信，创作是一个不断探索和尝试的过程。无论你是游戏开发者、艺术家还是玩家，我们都欢迎你在PixelForge上分享你的创作和经验。我们希望通过这个平台，能够激发更多人的创作热情，让更多的人参与到游戏艺术的创作中来。",
      img: img,
      time: "2025-04-08",
    },
    {
      title: "PixelForge是一个游戏资讯分享平台2",
      content: "我们相信，创作是一个不断探索和尝试的过程。无论你是游戏开发者、艺术家还是玩家，我们都欢迎你在PixelForge上分享你的创作和经验。我们希望通过这个平台，能够激发更多人的创作热情，让更多的人参与到游戏艺术的创作中来。",
      img: img,
      time: "2025-04-08",
    },
    {
      title: "PixelForge是一个游戏资讯分享平台3",
      content: "我们相信，创作是一个不断探索和尝试的过程。无论你是游戏开发者、艺术家还是玩家，我们都欢迎你在PixelForge上分享你的创作和经验。我们希望通过这个平台，能够激发更多人的创作热情，让更多的人参与到游戏艺术的创作中来。",
      img: img,
      time: "2025-04-08",
    },
    {
      title: "PixelForge是一个游戏资讯分享平台4",
      content: "我们相信，创作是一个不断探索和尝试的过程。无论你是游戏开发者、艺术家还是玩家，我们都欢迎你在PixelForge上分享你的创作和经验。我们希望通过这个平台，能够激发更多人的创作热情，让更多的人参与到游戏艺术的创作中来。",
      img: img,
      time: "2025-04-08",
    }
  ]
  const lastContentLeader = lastContent[0] || null;
  const lastContentOthers = lastContent.slice(1, lastContent.length) || null;

  return(
    <div className="flex h-screen flex-col items-center">
      <div className="text-4xl">
      Catch the Latest
      </div>
      <div className="flex mt-4 gap-20 mx-20">
        <div className="w-1/2 h-1/2 flex flex-col gap-2">
          <img src={img} ></img>
          <div className="news">最新消息</div>
          <div className="text-xl">{lastContentLeader.title}</div>
          <div className="sub-headline">{lastContentLeader.content}</div>
          <div className="time">{lastContentLeader.time}</div>
        </div>
        <div className="w-1/2 h-1/2 flex flex-col gap-2 ">
          <ul>
            {lastContentOthers.map((item, index) => (
              <li key={index} className="flex flex-col gap-2 mb-4">

                <div className="text-xl">{item.title}</div>
                <div className="sub-headline">{item.content}</div>
                <div className="time">{item.time}</div>
                <hr className="w-full border-gray-300 mt-2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}