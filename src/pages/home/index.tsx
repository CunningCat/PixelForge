import Header from "./Header";

import Footer from "./Footer";
import pixelBanner from "../../assets/Pixel-banner.png";
import { TheLastst } from "./TheLastst";
import GameReview from "./GameReview";
export default function Home() {
  return (
    <div className="min-h-screen bg-pixel bg-repeat text-white font-pixel ">
      <Header />

      <img
        className="w-[100%] h-full mb-20"
        src={pixelBanner}
        alt="Pixel Art Background"
      />
      <main className="bannel flex flex-col gap-20  mx-auto ">
        <TheLastst />
        <GameReview />
      </main>

      <Footer />
    </div>
  );
}
