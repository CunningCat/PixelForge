import PostItem from "./PostItem";

import { useRef, useState } from "react";
import { PostDownloadInfo } from "@/types/postdownloadinfo";
import { getLatestNews } from "@/services/getLatestNews";
import { useEffect } from "react";
import InfiniteScroll from "@/components/InfiniteScrollProps";
import CommunityList from "./CommunityList";
export default function AllPost() {
  const [postList, setPostList] = useState<PostDownloadInfo[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const offset = useRef(0);

  useEffect(() => {
    loadPosts();
  }, []);
  const loadPosts = async () => {
    if (!hasMore) {
      return;
    }
    if (loading) {
      return;
    }
    setLoading(true);
    const res = await getLatestNews(offset.current);
    if (res && res.length >= 0) {
      setPostList((prev) => [...prev, ...res]);
      offset.current += res.length;
      if (res.length < 5) {
        setHasMore(false); // 已经没有更多了
      }
    }
    setLoading(false);
  };
  return (
    <div>
      <div className="wl-[50%] mx-auto rounded-3xl p-4 bg-gray-100 mb-2">
        <CommunityList />
      </div>

      {postList ? (
        postList.map((item) => (
          <PostItem
            className="bg-gray-100 mb-4  rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            key={item.post_id}
            item={item}
          />
        ))
      ) : (
        <div>加载中...</div>
      )}

      {hasMore ? (
        <InfiniteScroll onReachBottom={loadPosts} />
      ) : (
        <div className="flex justify-center items-center h-20 text-l text-gray-500">
          -----------没有更多了-----------
        </div>
      )}
    </div>
  );
}
