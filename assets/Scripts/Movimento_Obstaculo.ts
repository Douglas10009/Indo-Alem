// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property (cc.Prefab)
    obstaculoPrefab: cc.Prefab = null; 

    @property
    xMin:  int  = -656;
    @property 
    xMax: int = 200;
    @property 
    yMin: int = 300;
    @property
    yMax: int = 312;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var game = cc.director.getPhysicsManager();
        game.enabled=true;
        //this.spawnNewObstaculo();
        this.spawnWait();
    }
    
    spawnNewObstaculo() {
        var newObstaculo = cc.instantiate(this.obstaculoPrefab);
         
        var posx = this.xMin + Math.random() * (this.xMax - this.xMin);
        var posy = this.yMin + Math.random() * (this.yMax - this.yMin);
 
        newObstaculo.setPosition(posx,posy);
        this.node.addChild(newObstaculo);    
    }

     spawnWait(){
        
        (async () => { 
            // Do something before delay
           this.spawnNewObstaculo();
           console.log('before delay')
    
           function delay(ms: number) {
               return new Promise( resolve => setTimeout(resolve, ms) );
           }
    
            await delay(1000);
    
           // Do something after
           this.spawnNewObstaculo();
           console.log('after delay')
        })();
        
         
    }

    start () {

    }

    update (dt) {
        //this.spawnNewObstaculo();
    }
}
