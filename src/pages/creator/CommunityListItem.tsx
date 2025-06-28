import "./css/index.css";
export default function CommunityListItem({
  name,
  selectCommunity,
}: {
  name: string;
  selectCommunity: (name: string) => void;
}) {
  return (
    <li
      className="ChooseCommunity-list_item"
      onClick={() => selectCommunity(name)}
    >
      +{name}
    </li>
  );
}
