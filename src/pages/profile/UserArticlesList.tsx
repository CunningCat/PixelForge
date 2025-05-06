import "./css/index.css"
export default function UserArticlesList() {
  return (
    <div className="mx-40">
      <ul className="flex gap-2">
        <li className="articleslist" key="myarticle">帖子</li>
        <li className="articleslist" key="reply">回复</li>
        <li className="articleslist" key="like">喜欢</li>
      </ul>
    </div>
  )
}