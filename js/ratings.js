document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.rating').forEach(ratingEl => {
		const value = parseInt(ratingEl.textContent);
		const fill = ratingEl.nextElementSibling.querySelector('.rating-fill');
		const color = value >= 70 ? '#a6e3a1' : value >= 40 ? '#f9e2af' : '#f38ba8';
		fill.style.cssText = `background-color: ${color}; width: ${value}%`;
		ratingEl.style.color = color;
	});
});
