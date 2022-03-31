import { Container, Sprite } from "pixi.js";

 export class ScoreBoard extends Container{
     constructor(){
         super();
        const marco: Sprite = Sprite.from("Marco");
        const next: Sprite = Sprite.from("Next");
        const star: Sprite = Sprite.from("Star");
        const box_points: Sprite = Sprite.from("Box_Points");

        marco.position.set(400,100);
        next.scale.set(2);
        next.position.set(420,250);
        star.position.set(540,100);
        box_points.position.set(410,140);
                

        this.addChild(star)
        this.addChild(box_points)
        this.addChild(next);
        this.addChild(marco);

      
     }

 }