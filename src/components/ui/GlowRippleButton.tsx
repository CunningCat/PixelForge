import { motion } from "framer-motion";
import  { useRef, MouseEvent } from "react";
import "./css/GlowRippleButton.css";

export default function GlowRippleButton({
  text,
  onClickMethod,
}: {
  text: string;
  onClickMethod: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();

    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);
    onClickMethod();
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <motion.button
      ref={buttonRef}
      className="glow-ripple-button"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        transition: { duration: 0.2 },
      }}
      onClick={createRipple}
    >
      {text}
    </motion.button>
  );
}
