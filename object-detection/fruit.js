
img="";
objects = [];
status="";

function preload(){
    img= loadImage('fruitbasket.png');
    }
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);

    }
}


function draw(){
image(img, 0, 0, 640, 420);
if( status != ""){
    for (i = 0; i < objects.length; i++){
        document.getElementById("status").innerHTML = "Status : Object Detected";
        fill("#FF0000");
        percent = floor(objects[i].confidence *100);
        text(objects[i].label+""+percent+"%", objects[i].x+ 15, objects[i].y+ 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    }
fill("#FF0000");
text("Fruit",110, 75);
noFill();
stroke("#FF0000");
rect( 100, 60, 400, 200 );
}

function back(){
    window.location = "index.html";
}
