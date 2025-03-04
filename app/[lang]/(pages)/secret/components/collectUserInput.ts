import { queueMove } from "./player";

window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      queueMove("forward");
    } else if (event.key === "ArrowDown") {
      queueMove("backward");
    } else if (event.key === "ArrowLeft") {
      queueMove("left");
    } else if (event.key === "ArrowRight") {
      queueMove("right");
    }
  });