(async () => {
  await loadFull(tsParticles);
  await tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        number: {value: 125},
        size: {value: 1},
        color: {value: "#cba6f7"},
        links: {enable: true, distance: 90, opacity: 0.25, color: "#cba6f7"},
        move: {enable: true, speed: 0.8, outModes: "bounce" }
      }
    }
  });
})();
