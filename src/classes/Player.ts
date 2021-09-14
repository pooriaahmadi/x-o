import { PlayerInputs } from "../types/types";
import { boxCollision } from "./Utils";
class Player {
	ctx;
	deviceWidth;
	deviceHeight;
	roomSize;
	rows;
	columns;
	lineWidth;
	inputs: boolean[][] = [];
	constructor(inputs: PlayerInputs) {
		this.ctx = inputs.ctx;
		this.deviceHeight = inputs.deviceHeight;
		this.deviceWidth = inputs.deviceWidth;
		this.roomSize = inputs.roomSize;
		this.rows = inputs.boardRows;
		this.columns = inputs.boardColumns;
		this.lineWidth = inputs.lineWidth;
		for (let i = 0; i < inputs.boardRows; i++) {
			this.inputs.push([]);
			for (let k = 0; k < inputs.boardColumns; k++) {
				this.inputs[i].push(false);
			}
		}
	}
	private checkForFor = (i: number, k: number, player: Player) => {
		return player.inputs[i][k] || this.inputs[i][k];
	};
	private rightFor = (i: number, player: Player) => {
		const move = [];
		for (let j = 0; j < this.columns; j++) {
			if (!this.checkForFor(i, j, player)) {
				move.push([i, j]);
			}
		}
		return move;
	};
	private downFor = (k: number, player: Player) => {
		const move = [];
		for (let j = 0; j < this.rows; j++) {
			if (!this.checkForFor(j, k, player)) {
				move.push([j, k]);
			}
		}
		return move;
	};
	private diameterFor = (player: Player) => {
		const move = [];
		for (let i = 0; i < this.columns; i++) {
			if (!this.checkForFor(i, i, player)) {
				move.push([i, i]);
			}
		}
		return move;
	};
	private reverseDiameterFor = (player: Player) => {
		const move = [];
		for (let i = this.columns - 1; i >= 0; i--) {
			if (!this.checkForFor(i, i, player)) {
				move.push([i, i]);
			}
		}
		return move;
	};
	calculateMoves = (player: Player) => {
		const possibleMoves = [];
		for (let i = 0; i < this.columns; i++) {
			for (let k = 0; k < this.rows; k++) {
				if (i === 0) {
					if (k === 0) {
						possibleMoves.push(this.rightFor(i, player));
						possibleMoves.push(this.downFor(k, player));
						possibleMoves.push(this.diameterFor(player));
					} else if (k === Math.floor(this.columns / 2)) {
						possibleMoves.push(this.downFor(k, player));
					} else if (k === this.columns - 1) {
						possibleMoves.push(this.downFor(k, player));
						possibleMoves.push(this.reverseDiameterFor(player));
					}
				} else {
					if (k === 0) {
						possibleMoves.push(this.rightFor(i, player));
					}
				}
			}
		}
		return possibleMoves;
	};
	click = (e: any, opponent: Player) => {
		const x = this.deviceWidth / 2 - (this.roomSize * this.columns) / 2;
		const y = this.deviceHeight / 2 - (this.roomSize * this.rows) / 2;
		for (let i = 0; i < this.columns; i++) {
			for (let k = 0; k < this.rows; k++) {
				const roomX = x + this.roomSize * k;
				const roomY = y + this.roomSize * i;
				if (
					boxCollision(
						e.pageX,
						e.pageY,
						roomX,
						roomY,
						this.roomSize,
						this.roomSize
					)
				) {
					if (this.inputs[i][k] || opponent.inputs[i][k]) {
						return false;
					}
					this.inputs[i][k] = true;
					return true;
				}
			}
		}
	};
	draw = () => {
		const x = this.deviceWidth / 2 - (this.roomSize * this.columns) / 2;
		const y = this.deviceHeight / 2 - (this.roomSize * this.rows) / 2;
		this.inputs.forEach((item, i) => {
			item.forEach((item, k) => {
				if (item) {
					this.move(x + this.roomSize * k, y + this.roomSize * i);
				}
			});
		});
	};
	move = (roomX: number, roomY: number) => {
		const reduceSize = 20;
		this.ctx.lineWidth = this.lineWidth;
		this.ctx.lineCap = "round";
		this.ctx.fillStyle = "black";

		this.ctx.beginPath();
		this.ctx.moveTo(roomX + reduceSize, roomY + reduceSize);
		this.ctx.lineTo(
			roomX + this.roomSize - reduceSize,
			roomY + this.roomSize - reduceSize
		);
		this.ctx.stroke();
		this.ctx.closePath();

		this.ctx.beginPath();
		this.ctx.moveTo(roomX + this.roomSize - reduceSize, roomY + reduceSize);
		this.ctx.lineTo(roomX + reduceSize, roomY + this.roomSize - reduceSize);
		this.ctx.stroke();
		this.ctx.closePath();
	};
}
export default Player;
