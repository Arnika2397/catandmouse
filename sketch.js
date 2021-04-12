
var cat,mouse,bg
var catimg, catimg1, catimg2, mouseimg, mouseimg1, mouseimg2, bgimg
function preload() {
    //load the images here
    catimg = loadImage("images/cat1.png");
    catimg1 = loadAnimation("images/cat2.png,images/cat3.png")
    catimg2 = loadImage("images/cat4.png");
    mouseimg = loadImage("images/mouse1.png");
    mouseimg1 = loadAnimation("images/mouse2.png,images/ mouse3.png");
    mouseimg2 = loadImage("images/mouse4.png");
    bgimg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(300,300,20,20);
    cat.addAnimation("sleep", catimg);

    mouse=createSprite = (100,300,20,20);
    mouse.addAnimation(mouseimg);

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocity=0;
        cat.addAnimation("ee",mouseimg2);
        cat.x=350;
        cat.changeAnimation("ee");
        mouse.addAnimation("eee",mouseimg2)
        mouse.changeanimation("eee")
    }

    drawSprites();

   
}


function keyPressed(){

//For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg1);
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;

    cat.velocityX = -4;
    cat.addAnimation("run", catimg1);
    cat.changeAnimation("run")
}


}