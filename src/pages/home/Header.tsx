import ButtonRegister from "../../components/login/button-register";
export default function Header() {
  return (
    <header className="py-6 px-4 flex justify-between items-center bg-black bg-opacity-80">
      <h1 className="text-3xl">🎮 PixelForge</h1>
      <nav className="space-x-4 text-lg">
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-yellow-400 hover:underline">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 hover:underline">Contact</a></li>
          <ButtonRegister />
        </ul>
      </nav>
    </header>
  );
}