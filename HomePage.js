class HomePage{
    constructor(){
        this.heading = createElement('h1');
        this.play = createButton('Play');
        this.controls = createButton('Controls');
        this.instructions = createButton('Instructions');
        this.credits = createButton('Purpose');
        this.feedback = createButton('Give Feedback');
        
    }

    hide(){
        this.play.hide();
        this.controls.hide();
        this.instructions.hide();
        this.credits.hide();
        this.feedback.hide();
    }

    display(){
        if(gameState === "Home"){

            ground.visible = false;

            this.heading.html("Study Planner");
            this.heading.position(displayWidth/2-90,displayHeight/2-300);
            this.heading.style('color','purple');

            this.play.position(displayWidth/2-200,displayHeight/2-100);
            this.play.style('width','200px');
            this.play.style('height','40px');

            this.controls.position(displayWidth/2+20,displayHeight/2-100);
            this.controls.style('width','200px');
            this.controls.style('height','40px');

            this.instructions.position(displayWidth/2-200,displayHeight/2-40);
            this.instructions.style('width','200px');
            this.instructions.style('height','40px');

            this.credits.position(displayWidth/2+20,displayHeight/2-40);
            this.credits.style('width','200px');
            this.credits.style('height','40px');

            this.feedback.position(displayWidth/2-80,displayHeight/2+25);
            this.feedback.style('width','200px');
            this.feedback.style('height','40px');
        }
        
    }

    playGame(){
        if(this.play.mousePressed(()=>{
        this.play.hide();
        this.controls.hide();
        this.instructions.hide();
        this.credits.hide();
        this.feedback.hide();

        this.name = createInput("Your name");
        this.name.position(displayWidth/2-150,displayHeight/2-100);
        this.name.style('width','300px');
        this.name.style('height','30px');

        this.goal = createInput("Your goal");
        this.goal.position(displayWidth/2-150,displayHeight/2-50);
        this.goal.style('width','300px');
        this.goal.style('height','30px');

        this.submit = createButton('Start !');
        this.submit.position(displayWidth/2-100,displayHeight/2+30);
        this.submit.style('width','200px');
        this.submit.style('height','40px');

        if(this.submit.mousePressed(()=>{
           if(keyDown("enter") || this.name.value() !== "Your name" && this.goal.value() !== "Your goal" && this.name.value() !== "" && this.goal.value() !== ""){
              this.name.hide();
              this.goal.hide();
              this.submit.hide();
              this.heading.hide();
              gameState = "play";
           }
           else{
               alert("Please enter all details.");
           }

            
        }));
     }));
    }

    showInst(){
        this.instructions.mousePressed(()=>{
            gameState = "instruct";
         })  
    }

    showControls(){
        this.controls.mousePressed(()=>{
            gameState = "con";
        })
    }

    showLbd(){
        this.credits.mousePressed(()=>{
            gameState = "lbd";
        })
    }

    atLast(){
        this.feedback.mousePressed(()=>{
            gameState = "givefeed";
        })
    }

}