var snow3, bgImage;
var snow, snowImage;

function preload() {
    bgImage = loadImage("snow3.jpg");
    snowImage = loadImage("snow4.webp");
}

function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(bgImage);
    createSnow();
    drawSprites();
}

function createSnow() {
    if (frameCount % 10 === 0) {
        snow = createSprite(random(0, 800), 0, 50, 50);
        snow.addImage(snowImage);
        snow.scale = 0.1;
        snow.velocityY = 3;
    }
}