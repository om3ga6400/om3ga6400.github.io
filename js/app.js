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
          value: "#f5e0dc"
        },
        links: {
          enable: true,
          distance: 100,
          opacity: 0.25,
          color: "#f5e0dc"
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
