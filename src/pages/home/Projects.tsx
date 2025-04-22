export default function Projects() {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl mb-2 border-b border-yellow-400 w-fit">🛠 Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <li className="bg-black bg-opacity-50 p-4 rounded-lg border border-yellow-300">
          <h3 className="text-xl">🎨 Pixel Painter</h3>
          <p className="text-sm mt-2">A tiny web app to draw with pixel blocks like an 8-bit game designer.</p>
        </li>
        <li className="bg-black bg-opacity-50 p-4 rounded-lg border border-yellow-300">
          <h3 className="text-xl">🔤 Retro Typing Game</h3>
          <p className="text-sm mt-2">Test your typing skills in a pixelated arcade style environment.</p>
        </li>
      </ul>
    </section>
  );
}