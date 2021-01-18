let canvas = "";

let font,
    fontsize = 42;

function preload() {
    // Ensure the .ttf or .otf font stored in the assets directory
    // is loaded before setup() and draw() are called
    font = "Inter";
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.id("canvas");
    // Set text characteristics
    //fill("#ed225d");
    colorMode(HSB);
    background(0);
    textFont(font);
    textSize(fontsize);
    textAlign(LEFT, TOP);
}

const ogWidth = 0;
const ogHeight = 0;
const minWidth = 33;
const minHeight = 33;
const maxWidth = 222;
const maxHeight = 222;
let myWidth = ogWidth;
let myHeight = ogHeight;
let myMove = "shrink";
let startColor = 0;
let animSwitch = "up";

function mouseMoved() {
    scaleEllipse();
}

function mouseDragged() {
    scaleEllipse();
}

function colorEllipse() {
    if (animSwitch === "up") {
        if (startColor < 255) {
            // console.log(startColor);
            startColor++;
            // console.log(startColor);
        } else {
            animSwitch = "down";
            // console.log(animSwitch);
        }
    } else if (animSwitch === "down") {
        if (startColor > 0) {
            // console.log(startColor);
            startColor--;
            // console.log(startColor);
        } else {
            animSwitch = "up";
            // console.log(animSwitch);
        }
    }
    fill(startColor, 255, 255);
}

function scaleEllipse() {
    if (myMove === "shrink") {
        // console.log(myMove);
        myWidth -= 1;
        // console.log(myWidth);
        myHeight -= 1;
        // console.log(myHeight);

        if (myWidth <= minWidth && myHeight <= minHeight) {
            myMove = "grow";
        }
        // console.log(myWidth);
        // console.log(myHeight);
        // push();
        // ellipse(mouseX, mouseY, myWidth, myHeight);
    } else if (myMove === "grow") {
        // console.log(myMove);
        myWidth += 1;
        // console.log(myWidth);
        myHeight += 1;
        // console.log(myHeight);

        if (myWidth >= maxWidth && myHeight >= maxHeight) {
            myMove = "shrink";
        }
    }
    colorEllipse();
    ellipse(mouseX, mouseY, myWidth, myHeight);

    // console.log(myWidth);
    // console.log(myHeight);

    // letter = "You're an artist.";
    // letter2 = "You are an artist.";
    // letter3 = "You are a real artist, you know?";
    // letter4 = "I am an artist too.";
    // text(letter, 150, 140);
    // text(letter2, 150, 150);
    // text(letter3, 150, 170);
    // text(letter4, 150, 200);

}

function draw() {
    // do your drawing stuff here

    if (mouseIsPressed) {
        // fill(0);
        stroke(255);
        // strokeWeight(0);
    } else {
        // fill(255);
        stroke(0);
        // strokeWeight(0);
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    //draw();
}