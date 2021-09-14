import { PlayerInputs } from "../types/types";
import Player from "./Player";

const random = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
class Computer extends Player {
	randomMove: [number, number[][]];

	calculateMovesToStop = (player: boolean[][], opponent: boolean[][]) => {
		let winningMove: [i: number, k: number][] = [];
		for (let i = 0; i < this.columns; i++) {
			let horizontalRate = 0;
			let diameterRate = 0;
			let reverseDiameterRate = 0;
			let verticalRate = 0;
			let k;
			let horizontalMove: [i: number, k: number];
			let reverseDiameterMove: [i: number, k: number];
			let diameterMove: [i: number, k: number];
			let verticalMove: [i: number, k: number];
			for (k = 0; k < this.rows; k++) {
				if (player[i][k]) {
					horizontalRate += 1;
				} else {
					horizontalMove = [i, k];
				}
				if (player[k][k]) {
					diameterRate += 1;
				} else {
					diameterMove = [k, k];
				}
				if (player[k][this.rows - k - 1]) {
					reverseDiameterRate += 1;
				} else {
					reverseDiameterMove = [k, this.rows - k - 1];
				}
				if (player[k][i]) {
					verticalRate += 1;
				} else {
					verticalMove = [k, i];
				}
			}
			if (horizontalRate === this.columns - 1) {
				winningMove.push(horizontalMove);
			}
			if (diameterRate === this.columns - 1) {
				winningMove.push(diameterMove);
			}
			if (reverseDiameterRate === this.columns - 1) {
				winningMove.push(reverseDiameterMove);
			}
			if (verticalRate === this.columns - 1) {
				winningMove.push(verticalMove);
			}
		}

		winningMove = winningMove.filter((item) =>
			item && !opponent[item[0]][item[1]] ? true : false
		);

		return winningMove[random(0, winningMove.length - 1)];
	};

	doClick = (player: Player) => {
		const x = this.deviceWidth / 2 - (this.roomSize * this.columns) / 2;
		const y = this.deviceHeight / 2 - (this.roomSize * this.rows) / 2;
		const possibleMoves = this.calculateMoves(player);

		if (!this.randomMove) {
			const randomMoveNumber = random(0, possibleMoves.length - 1);
			this.randomMove = [randomMoveNumber, possibleMoves[randomMoveNumber]];
		} else {
			this.randomMove[1] = possibleMoves[this.randomMove[0]];
		}

		if (!this.randomMove[1].length) {
			let ok = false;
			while (!ok) {
				const randomMoveNumber = random(0, possibleMoves.length - 1);
				this.randomMove = [randomMoveNumber, possibleMoves[randomMoveNumber]];
				if (this.randomMove[1].length) {
					ok = true;
				}
			}
		}
		const randomNumber = random(0, this.randomMove[1].length - 1);
		const computerWinningMove = this.calculateMovesToStop(
			this.inputs,
			player.inputs
		);
		const playerWinningMove = this.calculateMovesToStop(
			player.inputs,
			this.inputs
		);
		const move =
			computerWinningMove ||
			playerWinningMove ||
			this.randomMove[1][randomNumber];
		this.click(
			{
				pageX: x + 1 + move[1] * this.roomSize,
				pageY: y + 1 + move[0] * this.roomSize,
			},
			player
		);
		if (move === this.randomMove[1][randomNumber]) {
			this.randomMove[1].splice(randomNumber, 1);
		}
	};
	move = (roomX: number, roomY: number) => {
		const reduceSize = 20;
		this.ctx.lineWidth = this.lineWidth;
		this.ctx.lineCap = "round";
		this.ctx.fillStyle = "black";

		this.ctx.beginPath();
		this.ctx.arc(
			roomX + this.roomSize / 2,
			roomY + this.roomSize / 2,
			(this.roomSize - reduceSize) / 2,
			0,
			2 * Math.PI
		);
		this.ctx.stroke();
		this.ctx.closePath();
	};
}

export default Computer;
