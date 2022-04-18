export class keyboard
{    
    public static readonly state: Map<string, boolean> = new Map();
    private constructor(){}

    private static initialized:boolean = false;
    public static initialize():void {
        if (keyboard.initialized)
        {
            return;
        }
        keyboard.initialized=true;
        document.addEventListener("keydown", keyboard.onKeyDown)
        document.addEventListener("keyup", keyboard.onKeyUp)


    }

    private static onKeyDown (e: KeyboardEvent)
    {
        keyboard.state.set(e.code,true);

    }
    private static onKeyUp (e: KeyboardEvent)
    {
        keyboard.state.set(e.code,false);

    }

}

