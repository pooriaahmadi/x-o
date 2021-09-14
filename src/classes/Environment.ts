import { EnvironmentInputs } from "../types/types";
import Board from "./Board";
import Player from "./Player";
import Computer from "./Computer";
class Environment {
	ctx;
	deviceWidth;
	deviceHeight;
	board;
	player;
	computer;
	turn: Computer | Player;
	onPlayerWin: () => any;
	onComputerWin: () => any;
	constructor(inputs: EnvironmentInputs) {
		this.ctx = inputs.ctx;
		this.deviceWidth = inputs.deviceWidth;
		this.deviceHeight = inputs.deviceHeight;
		this.board = new Board(inputs);
		this.player = new Player(inputs);
		this.computer = new Computer(inputs);
		this.turn = this.computer;
		document.querySelector("canvas").addEventListener("click", (e) => {
			if (this.turn === this.player) {
				if (this.player.click(e, this.computer)) {
					this.turn = this.computer;
				}
			}
		});
	}
	checkWin = (moves: boolean[][]) => {
		let win = false;
		for (let i = 0; i < this.board.columns; i++) {
			let isHorizontal = true;
			let isVertical = true;
			let isDiameter = true;
			let isReverseDiameter = true;
			for (let k = 0; k < this.board.rows; k++) {
				if (!moves[i][k]) {
					isHorizontal = false;
				}
				if (!moves[k][k]) {
					isDiameter = false;
				}
				if (!moves[k][this.board.rows - k - 1]) {
					isReverseDiameter = false;
				}
				if (!moves[k][i]) {
					isVertical = false;
				}
			}
			if (isHorizontal || isDiameter || isVertical || isReverseDiameter) {
				win = true;
			}
		}
		return win;
	};
	animate = () => {
		this.ctx.clearRect(0, 0, this.deviceWidth, this.deviceHeight);
		this.board.draw();
		this.player.draw();
		this.computer.draw();

		if (this.checkWin(this.player.inputs)) {
			this.onPlayerWin();
		} else if (this.checkWin(this.computer.inputs)) {
			this.onComputerWin();
		} else {
			if (this.turn === this.computer) {
				this.turn = this.player;
				this.computer.doClick(this.player);
			}

			requestAnimationFrame(this.animate);
		}
	};
}

export default Environment;
