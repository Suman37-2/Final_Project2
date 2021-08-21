var Wimg, Fimg, Insimg, Snimg, Tweetimg, Ytimg;
var p1,ground,book,book_img;
var gameState = "Home";
var bar,student,stu_img,soc_med;
var disturb,score = 0,health = 100;
var book_grp,dist_grp;
var enjoy,feeder,send,bar_length,b3;

function preload(){
   Wimg = loadImage("Images/WhatsApp_Icon.png");
   Fimg = loadImage("Images/FaceBook_Icon.png");
   Insimg = loadImage("Images/Instagram_Icon.png");
   Snimg = loadImage("Images/SnapChat_Icon.png");
   Tweetimg = loadImage("Images/Twitter_Icon.png");
   Ytimg = loadImage("Images/Youtube_Icon.png");
   stu_img = loadImage("Images/Student_Img.png");
   book_img = loadImage("Images/Book_Img.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);
   p1 = new HomePage();

   student = createSprite(190,470,30,20);
   student.addImage(stu_img);
   student.scale = 0.3;
   student.visible = false;

   book_grp = new Group();
   dist_grp = new Group();

   ground = createSprite(displayWidth/2-100,displayHeight-170,displayWidth+1000,20);
   ground.visible = false;

   enjoy = createInput("Did you enjoy?");
   enjoy.position(displayWidth/2-150,displayHeight/2-100);
   enjoy.style('width','300px');
   enjoy.style('height','30px');
   enjoy.hide();

   feeder = createInput("What's your feedback?");
   feeder.position(displayWidth/2-150,displayHeight/2-50);
   feeder.style('width','300px');
   feeder.style('height','30px');
   feeder.hide();

   send = createButton('Send');
   send.position(displayWidth/2-50,displayHeight/2+20);
   send.style('width','100px');
   send.style('height','40px');
   send.hide();

   bar = createSprite(displayWidth/2-600,displayHeight-550,30,0);
   bar.visible = false;

}

function draw(){
   background("lightblue");

   p1.display();
   p1.playGame();
   p1.showInst();
   p1.showControls();
   p1.showLbd();
   p1.atLast();

   if(gameState === "givefeed"){
      p1.hide();
      enjoy.show();
      feeder.show();
      send.show();

      if(enjoy.value() !== "Did you enjoy?" && feeder.value() !== "What's your feedback?"){
         send.mousePressed(()=>{
            location.reload();
         })
      }
   }

   if(gameState === "lbd"){
      p1.hide();
      p1.heading.show();
      textSize(16);
      fill("red");
      text("This game has been designed by me, a WhiteHat student, along with the assistance of my teacher.",displayWidth/2-550,displayHeight/2-150)
      text("I've made it for a project at the end of my course on JavaScript.",displayWidth-480,displayHeight/2-150);
      text("The one and only purpose of designing such a game is to spread awareness among students to prevent themselves from getting distracted by mobile phone",displayWidth/2-550,displayHeight/2-130);
      text("notifications from various social media apps.",displayWidth/2-550,displayHeight/2-110);
      text("I hope you'd like the game.",displayWidth/2-550,displayHeight/2-90);
      text("Thank you.",displayWidth/2-550,displayHeight/2-40);

      ok3 = createButton('Back');
      ok3.position(displayWidth/2-40,displayHeight/2+150);
      ok3.style('width','100px');
      ok3.style('height','40px');

      ok3.mousePressed(()=>{
         location.reload();
      })
   }


   if(gameState === "instruct"){
      p1.hide();

      ok = createButton('Back');
      ok.position(displayWidth/2-70,displayHeight/2+100);
      ok.style('width','100px');
      ok.style('height','40px');

      ok.mousePressed(()=>{
         location.reload();
      })

      textSize(20);
      fill("red");
      text("Game Instructions:",displayWidth/2-380,displayHeight/2-150);
      textSize(15);
      fill("black");
      text("1. Click on 'Play' option in the game menu.",displayWidth/2-380,displayHeight/2-100);
      text("2. Then, enter your name & a time span during which you'd like to study. (Min. 4 hrs & Max. 10 hrs)",displayWidth/2-380,displayHeight/2-80);
      text("3. Click on 'Start !' to begin.",displayWidth/2-380,displayHeight/2-60);
      text("4. You, as a student, have to concentrate & avoid distraction by dodging over the running social media icons.",displayWidth/2-380,displayHeight/2-40);
      text("5. If you touch any of the obstacles, your completion bar will turn red.",displayWidth/2-380,displayHeight/2-20);
      text("6. Continuous contact may automatically make you lose the game.",displayWidth/2-380,displayHeight/2);
      text("7. Collect books to increase knowledge points (XP).",displayWidth/2-380,displayHeight/2+20);
      text("8. After you play, you can share your opinion in the 'Give Feedback' option",displayWidth/2-380,displayHeight/2+40);
   }

   if(gameState === "con"){
      p1.hide();
      fill("red");
      textSize(20);      
      text("CONTROLS",displayWidth/2-50,displayHeight/2-150);
      fill("green");
      text("Key                                                                                    Function",displayWidth/2-270,displayHeight/2-80)
      fill("blue");
      text("W ----------------------------------------------------------------------- Move forward",displayWidth/2-270,displayHeight/2-20);
      text("E ----------------------------------------------------------------------- Jump",displayWidth/2-270,displayHeight/2+10);

      ok2 = createButton('Back');
      ok2.position(displayWidth/2-40,displayHeight/2+150);
      ok2.style('width','100px');
      ok2.style('height','40px');

      ok2.mousePressed(()=>{
         location.reload();
      })
   }

   if(gameState === "play"){
      background("pink");
      
      student.visible = true;
      ground.visible = true;
      bar.visible = true;

      if(keyDown("E") && student.y>470){
         student.velocityY = -20;
      }
      student.velocityY += 1;

      if(keyDown("W")){
         spawnBooks();
         spawnDisturbance();
      }

      bar_length = p1.goal.value();
      bar.height = bar_length*30;
      student.collide(ground);

      if(bar_length === "4"){
         b3 = 4;
      }
      else if(bar_length === "5"){
         b3 = 5;
      }
      else if(bar_length === "6"){
         b3 = 6;
      }
      else if(bar_length === "7"){
         b3 = 7;
      }
      else if(bar_length === "8"){
         b3 = 8;
      }
      else if(bar_length === "9"){
         b3 = 9;
      }
      else if(bar_length === "10"){
         b3 = 10;
      }
      else{
         b3 = "Error";
      }
      
      textSize(13);
      fill("blue");
      text(p1.name.value(),student.x-25,student.y-40);

      
      if(health<100 && frameCount%500 === 0){
         health += 5;
      }
      if(health < 10){
         textSize(12);
         fill("red");
         text("You're about to die!",displayWidth/2-70,displayHeight-560)
      }
      if(health < 5){
         gameState = "end";
      }
      if(score > 0){
         bar.shapeColor = "green";
      }
      if(health < 55){
         bar.shapeColor = "red";
      }
      if(b3 !== 0){
         if(score>49 && score<101){
            b3 -= 1;
         }
         if(score>100 && score<151){
            b3 -= 2;
         }
         if(score>150 && score<201){
            b3 -= 3;
         }
         if(score>200 && score<251){
            b3 -= 4;
         }
         if(score>250 && score<301){
            b3 -= 5;
         }
         if(score>300 && score<351){
            b3 -= 6;
         }
         if(score>350 && score<401){
            b3 -= 7;
         }
         if(score>400 && score<451){
            b3 -= 8;
         }
         if(score>450 && score<501){
            b3 -= 9;
         }
         if(score>500 && score<601){
            b3 -= 10;
         }
      }
      
      if(b3 === 0){
         gameState = "finished";
      }
      

      text("Knowledge Points : "+score,displayWidth/2-70,displayHeight-600);
      text("Health : "+health,displayWidth/2-70,displayHeight-620);
      text("Goal hour(s) : "+b3,displayWidth/2-70,displayHeight-640);

   }

   if(gameState === "end"){
      student.visible = false;
      bar.visible = false;
      ground.visible = false;
      p1.heading.show();
      p1.heading.style('color','white');
      background("black");

      var l1 = createElement('h2');
      l1.html("You've lost the game!");
      l1.position(displayWidth/2-100,displayHeight/2-200);
      l1.style('color','yellow');

      var b2 = createButton('Replay');
      b2.position(displayWidth/2-100,displayHeight/2-100);
      b2.style('width','200px');
      b2.style('height','40px');

      b2.mousePressed(()=>{
         location.reload();
      })
   }
   
   if(gameState === "finished"){
      background("lightgreen");
      ground.visible = false;
      bar.visible = false;

      p1.heading.show();
      var final = createElement('h2');
      final.html("You've won the game!")
      final.position(displayWidth/2-100,displayHeight/2-200);
      textSize(20);
      fill("orange")
      text("Score : "+score,displayWidth/2-20,displayHeight/2-100);
      p1.feedback.show();

   }

   drawSprites();
}

function spawnBooks(){
   if(frameCount%80 === 0){
      book = createSprite(displayWidth-100,displayHeight-450,30,30);
      book.velocityX = -8;
      book.addImage(book_img);
      book.scale = 0.2;
      book.lifetime = displayWidth/-8;
      book_grp.add(book);
   }
   if(student.isTouching(book_grp)){
      score += 5;
      book_grp.destroyEach();
   }
}

function spawnDisturbance(){
   if(frameCount%50 === 0){
      disturb = createSprite(displayWidth-100,displayHeight-250,30,30);
      disturb.velocityX = -20;
      disturb.scale = 0.2;
      disturb.lifetime = displayWidth/-20;
      dist_grp.add(disturb);

      var x = Math.round(random(1,6));
      switch(x){
         case 1:disturb.addImage(Wimg)
         break;
         case 2:disturb.addImage(Fimg)
         break;
         case 3:disturb.addImage(Insimg)
         break;
         case 4:disturb.addImage(Snimg)
         break;
         case 5:disturb.addImage(Tweetimg)
         break;
         case 6:disturb.addImage(Ytimg)
         break;
         default:break;
      }
   }
   if(student.isTouching(dist_grp)){
      if(score>0){
         score -= 5;
      }
      bar.shapeColor = "red";
      health -= 10;
      disturb.destroy();
   }
   }
