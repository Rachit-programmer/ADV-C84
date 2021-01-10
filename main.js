canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

window.addEventListener("keydown", my_keydown)
function my_keydown(){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') 
    {
    up();
    console.log("up")
    };
    if(keyPressed == '40') 
    {
    down();
    console.log("down");
    };
    if(keyPressed == '37') 
    {
    left();
    console.log("left");
    };
    if(keyPressed == '39') 
    {
    right();
    console.log("right");
    };
}

window.addEventListener("keydown", my_keydown)
function my_keydown(){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '83') 
    {
    car2_down();
    console.log("car2_down")
    };
    if(keyPressed == '65') 
    {
    car2_left();
    console.log("car2_left");
    };
    if(keyPressed == '68') 
    {
    car2_right();
    console.log("car2_right");
    };
    if(keyPressed == '87') 
    {
    car2_up();
    console.log("car2_up");
    };
}