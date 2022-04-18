import { Container, Sprite } from "pixi.js";

 export class HijitusSkate extends Container{
     constructor(){
         super();
        const hijitus: Sprite = Sprite.from("Hijitus_pichichus");
        const skate: Sprite = Sprite.from("Skate");

        skate.position.set(0,160);

        this.addChild(hijitus);
        this.addChild(skate);
     }

 }