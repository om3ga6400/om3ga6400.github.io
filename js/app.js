(async () => {
  await loadFull(tsParticles);
  await tsParticles.load({
    id: "tsparticles",
    options: {
      fullScreen: { enable: false },
      particles: {
        number: {
          value: 100,
          density: { enable: true, area: 500 },
        },
        size: { value: 1 },
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
