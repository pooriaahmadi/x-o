import { BoardInputs } from "../types/types";

class Board {
	ctx;
	deviceWidth;
	deviceHeight;
	roomSize;
	rows;
	columns;
	lineWidth;
	constructor(inputs: BoardInputs) {
		this.ctx = inputs.ctx;
		this.deviceHeight = inputs.deviceHeight;
		this.deviceWidth = inputs.deviceWidth;
		this.roomSize = inputs.roomSize;
		this.rows = inputs.boardRows;
		this.columns = inputs.boardColumns;
		this.lineWidth = inputs.lineWidth;
	}
	draw = () => {
		const x = this.deviceWidth / 2 - (this.roomSize * this.columns) / 2;
		const y = this.deviceHeight / 2 - (this.roomSize * this.rows) / 2;
		this.ctx.lineCap = "round";
		this.ctx.fillStyle = "black";
		this.ctx.lineWidth = this.lineWidth;

		for (let i = 1; i < this.columns; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(x + this.roomSize * i, y);
			this.ctx.lineTo(x + this.roomSize * i, y + this.roomSize * this.rows);
			this.ctx.stroke();
			this.ctx.closePath();
		}
		for (let i = 1; i < this.rows; i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(x, y + this.roomSize * i);
			this.ctx.lineTo(x + this.roomSize * this.columns, y + this.roomSize * i);
			this.ctx.stroke();
			this.ctx.closePath();
		}
	};
}

export default Board;
