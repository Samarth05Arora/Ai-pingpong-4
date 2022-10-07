
function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");

}

function draw() {
	game()
}

scoreRightWrist = 0;

function preload() {
	img = loadImage("mario05.png");
}

function setup() {
	createCanvas(650, 400);
	video = createCapture(VIDEO);
	video.size(600, 300);
	poseNet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);

}

function modelLoaded() {
	console.log("Model is loaded!");
}

function gotPoses(results) {
	if (results.length > 0) {

		console.log(results);
		rightWristX = results[0].pose.rightWrist.x;
		rightWristY = results[0].pose.rightWrist.y;
	}

}

function draw() {
	background("#D3D3D3");
	if (rightWristX < 300) {
		X = marioX - 2;
	}

	if (rightWristX > 300) {
		marioX = marioX + 2;
	}

	if (rightWrist < 150) {
		marioY = marioY - 2;
	}
	image(img, marioX, marioY, 40, 70);

	if (scoreRightWrist > 0.2){
	fill("#F6C80C");
    stroke("#F6C80C");
	circle(rightWristX, rightWristY, 20);
	}



}
