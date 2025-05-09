export default function PostItem() {
  return (
    <div className="flex flex-col bg-gray-400 gap-2 p-2 rounded-2xl">
      <div className="postitem_author flex justify-between">
        <div className="">
          <img></img>
          <div>用户名</div>
        </div>
        <button className="">复制链接</button>
      </div>
      <div className="postitem_title text-3xl">标题</div>
      <div className="postitem_content">内容</div>
      <div className="postitem_image">图片</div>
      <div className="flex justify-end">
        <span className="mr-2">点赞</span>
        <span>回复</span>
      </div>
    </div>
  )
}