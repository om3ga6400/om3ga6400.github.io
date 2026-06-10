(async () => {
  await loadFull(tsParticles);
  await tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: { enable: false },
      particles: {
        number: {
          value: 115,
          density: { enable: true, area: 800 },
        },
        size: { value: 1.5 },
        paint: {
          fill: {
            enable: true,
            color: { value: "#cba6f7" },
          },
        },
        links: { enable: true, distance: 125, opacity: 0.5, color: "#cba6f7" },
        move: { enable: true, speed: 0.5 },
      },
    },
  });
})();
