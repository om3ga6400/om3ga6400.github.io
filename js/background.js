const background = document.getElementById("background");
const canvas = document.createElement("canvas");
const seed = crypto.randomUUID();

background.append(canvas);

const render = () => {
  const pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
    seed,
  });

  pattern.toCanvas(canvas);
};

render();

let resizeTimeout;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(render, 100);
});
