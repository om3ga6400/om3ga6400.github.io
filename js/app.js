(async () => {
  await loadFull(tsParticles);
  await tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        number: { value: 100 },
        size: { value: 1 },
        color: { value: "#cba6f7" },
        links: { enable: true, distance: 100, opacity: 0.5, color: "#cba6f7" },
        move: { enable: true, speed: 0.5, outModes: "bounce" },
      },
    },
  });
})();
