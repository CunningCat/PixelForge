export default function LevelBadge({ exp }: { exp: number }) {
  const getLevel = (exp: number) => {
    const levelCurve = (level: number) => level * level * 100;
    let level = 1;
    while (exp >= levelCurve(level + 1)) {
      level++;
    }
    return level;
  };

  const level = getLevel(exp);
  const baseClass =
    "px-3 py-1 rounded-lg font-mono text-sm border shadow-md transition-all duration-300";
  let levelClass = "";

  if (level < 10) {
    levelClass = "bg-yellow-100 text-yellow-800 border-yellow-300";
  } else if (level < 20) {
    levelClass = "bg-gray-200 text-gray-900 border-gray-400";
  } else if (level < 30) {
    levelClass =
      "bg-yellow-400 text-white border-yellow-500 animate-pulse shadow-yellow-500";
  } else {
    levelClass =
      "bg-gradient-to-r from-pink-500 to-yellow-500 text-white border-pink-300 animate-[pulse_1.5s_ease-in-out_infinite] shadow-lg shadow-pink-500";
  }

  return (
    <div>
      <div className={`${baseClass} ${levelClass}`}>LV.{level}</div>
    </div>
  );
}
