(async () => {
	await loadFull(tsParticles);
	await tsParticles.load({
		id: "tsparticles",
		options: {
			particles: {
				number: {
					value: 150
				},
				size: {
					value: 1
				},
				color: {
					value: "#f5c2e7"
				},
				links: {
					enable: true,
					distance: 150,
					opacity: 0.25,
					color: "#f5c2e7"
				},
				move: {
					enable: true,
					speed: 1.75,
					outModes: "bounce"
				}
			}
		}
	});
})();
