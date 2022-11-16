function setup(){
    canvas = createCanvas(350,270);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,200 );
    video.hide();
}

function draw(){
    image(video, 0, 0, 350, 270);
}

function save(){
    save('snapshot.png');
}