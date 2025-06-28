import { useNavigate } from "react-router";
export default function Button_communityitem({
  src,
  name,
  urlname,
}: {
  src: string;
  name: string;
  urlname: string;
}) {
  const nav = useNavigate();
  return (
    <button
      className="flex flex-col justify-center items-center cursor-pointer"
      onClick={() => nav(`community/${urlname}`)}
    >
      <img src={src} alt={name} className="w-10 h-10 rounded-xl" />
      <p className="text-sm mt-1">{name}</p>
    </button>
  );
}
