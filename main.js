status = "";
objects = [];
function preload(){

}

function setup(){
canvas = createCanvas(480, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(480, 380);
video.hide();
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status != ""){
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Detecting Objects";
        
            fill("#fefe22");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%" + objects[i].x + 15 + objects[i].y + 15);
        noFill();
        stroke("#fefe22");
        rect(objects[i].x + objects[i].y + objects[i].width + objects[i].height);
    
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    type_object = document.getElementById("type_object").value;
    if(objects[i].label == type_object) {
        videoLiveView.stop();
        objectDetector.detect(gotResult);
        document.getElementById("object_found").innerHTML = type_object + "Found";
        var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(type_object + "Found");
    synth.speak(utterThis);

    }
    else{
        document.getElementById("object_found").innerHTML = type_object + "Not Found";
    }
}
