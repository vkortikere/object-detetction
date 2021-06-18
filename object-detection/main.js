img="";
objects = [];
status="";

function preload(){
    img= loadImage('dog_cat.jpg');
    }
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 
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
fill("#FF0000");
text("Dog", 45, 75);
noFill();
stroke("#FF0000");
rect( 30, 60, 450, 350 );
}
function fruit(){
    window.location = "fruit.html";

}
function giraffe(){
    window.location = "giraffe.html";
    
}
function elephant(){
    window.location = "elephant.html";
    
}
function zebra(){
    window.location = "zebra.html";
    
}

function dogcat(){
    window.location = "dogCat.html";
    
}

