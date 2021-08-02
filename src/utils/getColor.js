export const getColors = (num) => {
	switch (num) {
		case 2:
			return '#e8ffff';
		case 4:
			return '#d9f1ff';
		case 8:
			return '#bfe6ff';
		case 16:
			return '#8cd3ff';
		case 32:
			return '#59bfff';
		case 64:
			return '#26abff';
		case 128:
			return '#0da2ff';
		case 256:
			return '#009dff';
		case 512:
			return '#3a08f6';
		case 1024:
			return '#3c068e';
		case 2048:
			return '#1e0480';
		default:
			return '#a6ccd9';
	}
};
