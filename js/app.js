(async () => {
  await loadFull(tsParticles);
  await tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        number: {
          value: 80
        },
        size: {
          value: 1
        },
        color: {
          value: "#cba6f7"
        },
        links: {
          enable: true,
          distance: 100,
          opacity: 0.25,
          color: "#cba6f7"
        },
        move: {
          enable: true,
          speed: 1.5,
          outModes: "bounce"
        }
      }
    }
  });
})();
