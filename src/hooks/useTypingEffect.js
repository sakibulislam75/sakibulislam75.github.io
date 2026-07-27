import { useEffect, useState } from "react";

// Types the text out, pauses, deletes it, then loops — same timing as the original script.
export default function useTypingEffect(text, { typeSpeed = 75, deleteSpeed = 35, pause = 2000, restart = 500 } = {}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeoutId;

    const tick = () => {
      if (!deleting) {
        i++;
        setDisplay(text.slice(0, i));
        if (i === text.length) {
          deleting = true;
          timeoutId = setTimeout(tick, pause);
          return;
        }
        timeoutId = setTimeout(tick, typeSpeed);
      } else {
        i--;
        setDisplay(text.slice(0, i));
        if (i === 0) {
          deleting = false;
          timeoutId = setTimeout(tick, restart);
          return;
        }
        timeoutId = setTimeout(tick, deleteSpeed);
      }
    };

    timeoutId = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [text, typeSpeed, deleteSpeed, pause, restart]);

  return display;
}
