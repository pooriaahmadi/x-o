export interface EnvironmentInputs {
	ctx: CanvasRenderingContext2D;
	deviceWidth: number;
	deviceHeight: number;
	roomSize: number;
	boardColumns: number;
	boardRows: number;
	lineWidth: number;
}
export interface BoardInputs extends EnvironmentInputs {}
export interface PlayerInputs extends EnvironmentInputs {}
