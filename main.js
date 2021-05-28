canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car1_width = 200;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 200;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = "racing.jpg";

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;

}


function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}
window.addEventListener("keydown", my_keydown); /*keydown is a event not an id*/





function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "65") {
        car2_a();
        console.log("key A");
    }

    if (keyPressed == "68") {
        car2_d();
        console.log("key D");
    }

    if (keyPressed == "83") {
        car2_s();
        console.log("key S");
    }
    if (keyPressed == "87") {
        car2_w();
        console.log("key W");
    }
    if (keyPressed == "38") {
        car1_up();
        console.log("up arrow key");
    }
    if (keyPressed == "40") {
        car1_down();
        console.log("down arrow key");
    }
    if (keyPressed == "37") {
        car1_left();
        console.log("left arrow key");
    }
    if (keyPressed == "39") {
        car1_right();
        console.log("right arrow key");
    }

}

function car1_up() {
    if (car1_y >= 10) {
        car1_y -= 10;
        console.log("When up arrow is pressed =" + car1_x + "-" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1_y <= 520) {
        car1_y += 10;
        console.log("When down arrow is pressed =" + car1_x + "-" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_x >= 10) {
        car1_x -= 10;
        console.log("When left arrow is pressed =" + car1_x + "-" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1_x <= 590) {
        car1_x += 10;
        console.log("When right arrow is pressed =" + car1_x + "-" + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}


function car2_w() {
    if (car2_y >= 10) {
        car2_y -= 10;
        console.log("When up arrow is pressed =" + car2_x + "-" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_s() {
    if (car2_y <= 520) {
        car2_y += 10;
        console.log("When down arrow is pressed =" + car2_x + "-" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_a() {
    if (car2_x >= 10) {
        car2_x -= 10;
        console.log("When left arrow is pressed =" + car2_x + "-" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_d() {
    if (car2_x <= 590) {
        car2_x += 10;
        console.log("When right arrow is pressed =" + car2_x + "-" + car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

if (car1_x  > 700)
    {
        console.log ("car1 Won");
        document.getElementById("game_status").innerHTML="White color Car 1 Won !!";
    }

