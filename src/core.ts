import "./style.scss";
import Environment from "./classes/Environment";

const RATIO = window.devicePixelRatio;
const DEVICE_WIDTH = window.innerWidth * RATIO;
const DEVICE_HEIGHT = window.innerHeight * RATIO;

const canvas = document.querySelector("canvas");
canvas.setAttribute("width", DEVICE_WIDTH.toString());
canvas.setAttribute("height", DEVICE_HEIGHT.toString());
canvas.style.width = "100%";
canvas.style.height = "100%";

const ctx = canvas.getContext("2d");

const env = new Environment({
	boardColumns: 3,
	boardRows: 3,
	ctx: ctx,
	deviceHeight: DEVICE_HEIGHT,
	deviceWidth: DEVICE_WIDTH,
	roomSize: 100,
	lineWidth: 4,
});
const message: HTMLElement = document.querySelector(".message");
env.onComputerWin = () => {
	const h1 = document.createElement("h1");
	h1.style.color = "red";
	h1.innerText = "Computer wins!";
	message.appendChild(h1);
	message.style.display = "flex";
};
env.onPlayerWin = () => {
	const h1 = document.createElement("h1");
	h1.style.color = "green";
	h1.innerText = "Player wins!";
	message.appendChild(h1);
	message.style.display = "flex";
};
env.animate();
