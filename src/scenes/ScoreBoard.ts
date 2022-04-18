import { Container, Sprite, Texture, Text} from "pixi.js";
import { Button } from "../UI/button";
import { keyboard } from "../Utils/keyboard";

 export class ScoreBoard extends Container{

     private next:Button;

     private lastKeyPressed:Text;
     constructor()
     {
         super();
        // button next lo uso para eventos de click de mouse            
        this.next = new Button(
            Texture.from("Next"),
            Texture.from("Next2"),
            Texture.from("Next"),
             this.onButtonClick.bind(this)
             );    
        //this.next.scale.set(2);
        //this.next.width = 200;
        //this.next.height = 200;
        this.next.position.set(580,460); 
        

        // button start lo uso para eventos de touch  
        const star: Sprite = Sprite.from("Star");
        star.position.set(640,240);
        star.on("touchstart",this.onTouchStart,this);
        star.on("touchend",this.onTouchEnd,this);
        star.interactive=true;


        this.lastKeyPressed = new Text("Waiting ...", {fontSize: 30});
        this.lastKeyPressed.anchor.set(0.5);
        this.lastKeyPressed.position.set(660,200);
        
        
        
        
        const box_points: Sprite = Sprite.from("Box_Points");
        box_points.position.set(410,140);

       const marco: Sprite = Sprite.from("Marco"); 
        marco.position.set(400,100);


        //document.addEventListener("keydown",this.onkeyDown.bind(this))
                            
        this.addChild(star)
        this.addChild(box_points)
        this.addChild(this.next);
        this.addChild(marco);
        this.addChild(this.lastKeyPressed);
     
     }

    
      private onButtonClick():void
     {
       console.log("my new button clicker", keyboard.state.get("KeyA"));  
     }
     

     private onTouchStart():void
     {
         console.log("Touch Down");
        
     }
     private onTouchEnd():void
     {
         console.log("Touch Up" );
     } 
    

 }