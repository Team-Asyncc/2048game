//genrate random number between range
export const randomRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
export const random = () => (Math.random() > 0.2 ? 2 : 4);
