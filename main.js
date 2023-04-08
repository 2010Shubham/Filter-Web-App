var x = 0;
var y = 0;



function preload() {
    img = loadImage("https://i.postimg.cc/brvBLCD5/mustache.png");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    my_poseNet = ml5.poseNet(video, modelLoaded);
    my_poseNet.on('pose', gotposes);

}

function draw() {
    background("#bfbfff");
    image(video, 0, 0, 500, 500);
    image(img, x-105, y, 100, 100)
}

function take_snapshot() {
    save("snapshot.png");
}


function modelLoaded() {
    console.log("Model is loaded");
}


function gotposes(results) {
 
    if (results.length > 0) {

        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        console.log("Nose X is " + x + " and Y is " + y);
    }

}