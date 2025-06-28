import Header from "../home/Header";
import defaultimg from "@/assets/mine-avater.svg";
import fixImg from "@/assets/fix.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { updateUserName } from "@/services/updateUserName";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { setUserName, setAvatar } from "@/store/modules/userStore";
import { useEffect } from "react";
import updateUserAvatar from "@/services/updateUserAvatar";
import PostItem from "../post/PostItem";
import getSelfPost from "@/services/getSelfPost";
import { PostDownloadInfo } from "@/types/postdownloadinfo";
import ProfilePostsSelect from "./ProfilePostsSelect";
import InfiniteScroll from "@/components/InfiniteScrollProps";
import LevelBadge from "@/components/ui/LevelBadge";

export default function Profile() {
  const { user } = useSelector((state: RootState) => state);
  //用于切换编辑用户名的标签
  const [isEditing, setIsEditing] = useState(false);
  const [touchAvatar, setTouchAvatar] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const [postList, setPostList] = useState<PostDownloadInfo[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const offset = useRef(0);
  const [loading, setLoading] = useState(false);
  const isButtonClickedRef = useRef(false);

  //点击编辑按钮，切换为输入框，再次点击，提交输入内容到后台进行更新
  async function handleUpdateUserName(newName: string) {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      const res = await updateUserName(newName);
      if (res.success) {
        dispatch(setUserName(newName));
        toast("修改成功", {
          description: "完成",
          action: {
            label: "关闭",
            onClick: () => console.log("关闭"),
          },
        });
        setIsEditing(false);
      } else if (res.error) {
        toast("修改失败", {
          description: res.error.message,
          action: {
            label: "关闭",
            onClick: () => console.log("关闭"),
          },
        });
      }
    }
  }
  async function handleUpdateAvatar() {
    const res = await updateUserAvatar(user.userInfo.uid);
    if (res) {
      toast("修改成功", {
        description: "完成",
        action: {
          label: "关闭",
          onClick: () => console.log("关闭"),
        },
      });
      dispatch(setAvatar(res));
    }
  }

  //用户名输入框出现时自动聚焦
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const fetchData = async () => {
    const uid = user?.userInfo?.uid;
    if (!hasMore) {
      return;
    }
    if (loading) {
      return;
    }

    if (!uid) return;
    setLoading(true);
    const res = await getSelfPost(uid, offset.current);
    if (res && res.length >= 0) {
      setPostList((prev) => [...prev, ...res]);
      offset.current += res.length;
      console.log(offset.current, res.length);
      if (res.length < 5) {
        setHasMore(false); // 已经没有更多了
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user?.userInfo?.uid) {
      fetchData();
    }
  }, [user?.userInfo?.uid]);

  return (
    <div className="flex flex-col ">
      <Header className="text-white" />
      {/* 用户信息区 */}
      <div className="flex flex-col items-center mt-10 bg-white w-[60%] mx-auto">
        <div className="bg-gray-600 w-full h-40"></div>
        <div className="bg-black w-full h-40">
          <div className="relative ml-10">
            {/* 用户头像 */}
            <div
              className="w-35 h-35 rounded-full  -translate-y-1/2 overflow-clip items-center justify-center relative"
              onMouseEnter={() => setTouchAvatar(true)}
              onMouseLeave={() => setTouchAvatar(false)}
            >
              <img src={user.userInfo.avatar_url || defaultimg} />
              {touchAvatar && (
                <div
                  className="cursor-pointer bg-black/30 z-10 w-full h-full absolute top-0 text-white text-5xl flex justify-center items-center "
                  onClick={handleUpdateAvatar}
                >
                  +
                </div>
              )}
            </div>

            <div className="text-2xl text-white absolute top-full -translate-y-15 mt-2 flex items-center justify-center">
              {/* 名字显示区和输入框 */}
              {isEditing ? (
                <input
                  type="text"
                  maxLength={15}
                  className="focus:outline-none bg-gray-50/10"
                  onBlur={() => {
                    if (!isButtonClickedRef.current) {
                      setIsEditing(false);
                    }
                  }}
                  ref={inputRef}
                  defaultValue={user.userInfo.name}
                ></input>
              ) : (
                <span>{user.userInfo.name}</span>
              )}
              <LevelBadge exp={user.userInfo.exp} />
              <button
                className=" ml-2 w-10 h-10 bg-cover cursor-pointer"
                style={{ backgroundImage: `url(${fixImg})` }}
                onClick={() => {
                  handleUpdateUserName(inputRef.current?.value || "");
                  isButtonClickedRef.current = false;
                }}
                onMouseDown={() => {
                  // 鼠标按下就标记，确保 blur 不会触发隐藏
                  isButtonClickedRef.current = true;
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      {/* 帖子列表 */}
      <ProfilePostsSelect />
      {postList && (
        <div className="flex flex-col gap-5 w-[60%] mx-auto bg-black">
          {postList.map((item) => (
            <div>
              <PostItem
                className="black text-white  "
                key={item.post_id}
                item={item}
              />
              <hr className="text-gray-200" />
            </div>
          ))}
        </div>
      )}

      {hasMore ? (
        <InfiniteScroll onReachBottom={fetchData} />
      ) : (
        <div className="flex justify-center items-center h-20 text-l text-gray-500">
          -----------没有更多了-----------
        </div>
      )}
    </div>
  );
}
