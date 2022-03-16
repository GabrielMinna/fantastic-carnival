import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize",()=>{

const scaleX = window.innerWidth / app.screen.width; //1280/640 => 2 si la pantalla es de 1280 y mi juego de 640 mi juego se vera el doble de grande
const scaleY = window.innerHeight / app.screen.height;
const scale = Math.min (scaleX,scaleY);
app.view.style.width= "100px";

const gameWidth = Math.round (app.screen.width*scale);
const gameHeight = Math.round (app.screen.height*scale);

const marginHorizontal = Math.floor(window.innerWidth - gameWidth)/2;
const marginVertical = Math.floor(window.innerHeight - gameHeight)/2;

app.view.style.width= gameWidth + "px";
app.view.style.height= gameHeight + "px";

app.view.style.marginLeft = marginHorizontal + "px";
app.view.style.marginRight = marginHorizontal + "px";

app.view.style.marginTop = marginVertical + "px";
app.view.style.marginBottom = marginVertical + "px";


});
window.dispatchEvent (new Event("resize"));

Loader.shared.add({url:"./Hijitus_pichichus.png", name:"Hijitus_pichichus"});
Loader.shared.add({url:"./skate.png", name:"Skate"});

Loader.shared.onComplete.add(()=>{
const hijitus: Sprite = Sprite.from("Hijitus_pichichus");
const skate: Sprite = Sprite.from("Skate");

skate.position.set(0,160);

const hijitusWithSkate: Container = new Container();

hijitusWithSkate.addChild(hijitus);
hijitusWithSkate.addChild(skate);

hijitusWithSkate.scale.set(0.5);
hijitusWithSkate.x=200;
hijitusWithSkate.y=300;


console.log(skate.toGlobal(new Point()));
console.log(skate.parent.toGlobal(skate.position));

//const aux = skate.parent.toLocal(new Point(640.360));
//skate.position.x= aux.x;
//skate.position.y=aux.y;

app.stage.addChild(hijitusWithSkate)
});
Loader.shared.load(); 