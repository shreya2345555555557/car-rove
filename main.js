canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car1_heigth=70;
car1_width=120;
car1_image="car1.png";
car1_x=10;
car1_y=100;

car2_heigth=70;
car2_width=120;
car2_image="images(4).jpg";
car2_x=10;
car2_y=100;
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image; 
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadcar1;
    rover_imgTag.src=car1_image; 
}
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image; 
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadcar2;
    rover_imgTag.src=car2_image; 
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height); 
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height); 
}
window.addEventListener("keydown", my_keydown); 
function my_keydown(e) {
     keyPressed = e.keyCode; 
    console.log(keyPressed); 
    if(keyPressed == '38') 
    {
         up();
         console.log("up"); 
    }
          if(keyPressed == '40')
           {
                car1_down(); 
                console.log("down");
             } 
             if(keyPressed == '37') 
             { 
                 car1_left(); 
                 console.log("left");
                 }
                  if(keyPressed == '39')
                   {
                        car1_right(); 
                        console.log("right");
                     }
                     } 
             function up() {
                  if(rover_y >=0) 
                  {
                       rover_y = rover_y - 10;
                        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); uploadBackground(); 
                        uploadrover();
                     }
                     }
                      function down()
                       { if(rover_y <=500) { rover_y =rover_y+ 10; console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                         uploadBackground();
                          uploadrover();
                         } 
                        } 
                        function left()
                         { if(rover_x >= 0) { rover_x =rover_x - 10; console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                          uploadBackground(); 
                          uploadrover();
                         }
                         } 
                         function right() {
                             if(rover_x <= 700) 
                             {
                                  rover_x =rover_x + 10; 
                                  console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
                                   uploadBackground();
                                    uploadrover(); } 
                                }

