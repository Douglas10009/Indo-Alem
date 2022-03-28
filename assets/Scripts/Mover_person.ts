// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    right: cc.Sprite = null

    // LIFE-CYCLE CALLBACKS:
    moveLeft: 0;
    moveRight:0;
    movimento :0 // 0: stoped, 1: walking right, -1 : walking left

    onLoad () {
        this.right.node.on('touchstart', function(event){
            this.movimento = 1; //walking right
        }, this);
    }

    start () {

    }

    update (dt) {
        
        if (this.movimento == -1) {
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2( -300,this.node.position.y);
        }
    }
}
