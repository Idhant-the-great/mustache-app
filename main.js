function preload(){
}

function setup()
{
    canvas= createCanvas(300,300);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw(){
canvas.center()
image(video, 0, 0, 300, 300);
}
function take_snapshot()
{
    save('myFilterImage.png');
}
function modelLoaded()
{
    console.log("Posenet has started");
}
function gotPoses(result)
{
    if(result.length>0)
    {
        console.log(result);
        console.log('nose x='+result[0].pose.nose.x)
        console.log('nose y='+result[0].pose.nose.y)
    }
}