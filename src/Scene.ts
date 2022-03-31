import { Container,Text} from "pixi.js";
import { ScoreBoard } from "./ScoreBoard";

//import { HijitusSkate } from "./HijitusSkate";


export class Scene extends Container{
    constructor(){

        super();
        const scoreboard: ScoreBoard = new ScoreBoard;
        //scoreboard.scale.set(0.5);
        //scoreboard.x=200;
        //scoreboard.y=300;

        this.addChild(scoreboard);

        
        /*const hijitusAnimated:AnimatedSprite = new AnimatedSprite([
            Texture.from("HiPi1"),
            Texture.from("HiPi2"),
            Texture.from("HiPi3"),
            Texture.from("HiPi4"),
            Texture.from("Skate"),
            Texture.from("Hijitus_pichichus"),
            ], true
        );
        hijitusAnimated.play();
        hijitusAnimated.animationSpeed=0.05;
        this.addChild(hijitusAnimated);
*/
const mytext:Text =new Text ("prueba", {fontSize:30,fill:0xffffff});

mytext.text= "Puntuación";
mytext.position.set(590,300);
this.addChild(mytext);




    }
}