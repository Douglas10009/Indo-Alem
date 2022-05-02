// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // moveLeft: 0,
        // moveRight:0,
        // moveUp:0,
        // movimento :0, // 0: stoped, 1: walking right, -1 : walking left, 2: jupping
        moveLeft: 0,
        moveRight:0,
        moveUp:0,
        movimento :0, // 0: stoped, 1: walking right, -1 : walking left, 2: jupping
        duracao_pulo :1,
    },

    actionJump(event){
        var jump = cc.jumpTo(this.duracao_pulo, this.node.x , this.node.y , 150, 1);
        this.node.runAction(jump);
    },

    

    // onKeyDown: function (event) {
    //     switch(event.keyCode) {
    //         case cc.macro.KEY.a: // Esquerda - Left
    //             this.movimento = -1; //walking left
    //             console.log("the button A was been touched");
    //             break;

    //         case cc.macro.KEY.d: // Direita - Right
    //             this.movimento = 1; //walking right
    //             console.log("the button D was been touched");
    //             break;
            
    //         case cc.macro.KEY.w: // Cima/Jump
    //             this.up.node.on('touchstart', this.actionJump, this)
    //             console.log("the button W was been touched");
    //             break;
            
    //     }
    // },


    // onKeyUp: function (event) {
    //     switch(event.keyCode) {
    //         case cc.macro.KEY.a: // Esquerda - Left
    //             this.movimento = 0; //stop left
    //             this.getComponent(cc.RigidBody).linearDamping = 2;
    //             console.log("the button A was been relesed");
    //             break;

    //         case cc.macro.KEY.d: // Direita - Right
    //             this.movimento = 0; //stop right
    //             this.getComponent(cc.RigidBody).linearDamping = 3;
    //             console.log("the button D was been relesed");
    //             break;
    //     }
    // },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            switch(event.keyCode) {
                case cc.macro.KEY.a: // Esquerda - Left
                    this.movimento = -1; //walking left
                    console.log("the button A was been touched");
                    break;
    
                case cc.macro.KEY.d: // Direita - Right
                    this.movimento = 1; //walking right
                    console.log("the button D was been touched");
                    break;
                
                // case cc.macro.KEY.w: // Cima/Jump
                //     this.up.node.on('touchstart', function () {
                //         var jump = cc.jumpTo(this.duracao_pulo, this.node.x , this.node.y , 150, 1);
                //         this.node.runAction(jump);
                //     }, this)
                //     console.log("the button W was been touched");
                //     break;

                case cc.macro.KEY.w: // Cima/Jump
                    this.movimento = 2;
                    console.log("the button W was been touched");
                    break;
                
            }
        }, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, function (event) {
            switch(event.keyCode) {
                case cc.macro.KEY.a: // Esquerda - Left
                    this.movimento = 0; //stop left
                    this.getComponent(cc.RigidBody).linearDamping = 2;
                    console.log("the button A was been relesed");
                    break;
    
                case cc.macro.KEY.d: // Direita - Right
                    this.movimento = 0; //stop right
                    this.getComponent(cc.RigidBody).linearDamping = 3;
                    console.log("the button D was been relesed");
                    break;

                case cc.macro.KEY.w: // Cima/Jump
                    this.movimento = 0;
                    //this.getComponent(cc.RigidBody).linearDamping = 0;
                    console.log("the button W was been touched");
                    break;
            }
        }, this);

    },

    

    start () {

    },

    update (dt) {
        if (this.movimento == -1)
        {
			this.getComponent(cc.RigidBody).linearVelocity = cc.v2( -300,this.node.position.y);
        }

        //Chamar movimento direita
        if (this.movimento == 1)
        {
            this.getComponent(cc.RigidBody).linearVelocity = cc.v2( 300,this.node.position.y);
        }

        if (this.movimento == 2) {
            // var jump = cc.jumpTo(this.duracao_pulo, this.node.x , this.node.y , 150, 1);
            // this.node.runAction(jump);
            this.actionJump();
        }
    },
});
