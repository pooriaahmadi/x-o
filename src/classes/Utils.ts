export const boxCollision = (
	objectX: number,
	objectY: number,
	boxX: number,
	boxY: number,
	boxWidth: number,
	boxHeight: number
) => {
	return (
		objectX >= boxX &&
		objectX <= boxX + boxWidth &&
		objectY >= boxY &&
		objectY <= boxY + boxHeight
	);
};
