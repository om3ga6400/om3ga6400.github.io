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
          value: "#f5c2e7"
        },
        links: {
          enable: true,
          distance: 100,
          opacity: 0.25,
          color: "#f5c2e7"
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
