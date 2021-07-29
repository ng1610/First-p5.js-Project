function preload(){

}
function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(350, 170);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 140, 120, 350, 250);

    fill("red");
    stroke("red");
    circle(40, 40, 70);

    fill("red");
    stroke("red");
    circle(600, 40, 70);

    fill("red");
    stroke("red");
    circle(40, 440, 70);

    fill("red");
    stroke("red");
    circle(600, 440, 70);

    fill("green");
    stroke("green");
    rect(76, 30, 491, 20);

    fill("green");
    stroke("green");
    rect(76, 430, 491, 20);

    fill("green");
    stroke("green");
    rect(30, 76, 20, 331);

    fill("green");
    stroke("green");
    rect(590, 76, 20, 331);
}
function take_snap(){
   save('frame.png');
}