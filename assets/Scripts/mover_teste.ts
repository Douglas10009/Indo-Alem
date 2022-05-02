const {ccclass, property} = cc._decorator;

@ccclass
export default class MoveDE extends cc.Component {
    
      
    @property(cc.Sprite)
    right: cc.Sprite = null;
    
    @property(cc.Sprite)
    left: cc.Sprite = null; 
    
    @property(cc.Sprite)
    up: cc.Sprite = null; 

    duracao_pulo:number = 1;
    
     
    

    // LIFE-CYCLE CALLBACKS:

    actionJump(touch,event){
        var jump = cc.jumpTo(this.duracao_pulo, this.node.x , this.node.y , 150, 1);
        this.node.runAction(jump);
    }

    

     moveLeft: 0;
     moveRight:0;
     moveUp:0;
     movimento :0 // 0: stoped, 1: walking right, -1 : walking left, 2: jupping

     onLoad () {
            //Movimentação do personagem com teclado
        //cc.systemEvent.on(cc.SystemEvent. EventType.KEY_DOWN, this.onKeyDown, this);


            //Movimentação do personagem com o toque (START)
        this.right.node.on('touchstart', function(event){
            this.movimento = 1; //walking right
            // this.getComponent(cc.Animation).getAnimationState("person_andar_dir").play();
            // this.getComponent(cc.Animation).getAnimationState("Anim_person").pause();
            // this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
        }, this);

        this.left.node.on('touchstart', function(event){
            this.movimento = -1; //walking left
            // this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("walk_right_anim").play();
            // this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
        }, this);

        // this.up.node.on('touchstart', function(event){
        //     this.movimento = 2; //jupping
        // }, this)




            //Movimentação do pulo
        this.up.node.on('touchstart', this.actionJump, this)
        
                
        
            //Parar movimentos
         this.right.node.on('touchend', function(event){
             this.movimento = 0; //stop right
            //stop animation
                // this.getComponent(cc.Animation).getAnimationState("person_andar_dir").pause();
                // this.getComponent(cc.Animation).getAnimationState("Anim_person").play();
                // this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
                // this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
            //increase the linear Damping for stopping
             this.getComponent(cc.RigidBody).linearDamping = 3;
         }, this);
        
         this.left.node.on('touchend', function(event){
             this.movimento = 0; //stop left
            //stop animation
                // this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
                // this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
                // this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
                // this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").play();
             this.getComponent(cc.RigidBody).linearDamping = 2;
         }, this);

        //  this.up.node.on('touchend', function(event){
        //      this.movimento = 0; //stop jupping
        //      this.getComponent(cc.RigidBody).linearDamping = 5;
        //  }, this)
        
        
    }


	
    update (dt) {
        
        //Chamar Movimentar esquerda
       if (this.movimento == -1)
        {
            // this.getComponent(cc.Animation).getAnimationState("walk_left_anim").play();
            // this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause(); // PARADO ESQUERDA
            // this.getComponent(cc.Animation).getAnimationState("walk_right_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();

			this.getComponent(cc.RigidBody).linearVelocity = cc.v2( -300,this.node.position.y);
            //this.node.setPosition(this.node.position.x -= 300*dt, this.node.position.y)
        }

        //Chamar movimento direita
        if (this.movimento == 1)
        {
            // this.getComponent(cc.Animation).getAnimationState("walk_left_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("Iddle_left_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("walk_right_anim").play();
            //this.getComponent(cc.Animation).getAnimationState("person_andar_dir").play(); //play MOVIMENTAÇÃO DIREITA
            // this.getComponent(cc.Animation).getAnimationState("Iddle_right_anim").pause();
            // this.getComponent(cc.Animation).getAnimationState("Anim_person").pause(); //pause MOVIMENTAÇÃO DIREITA

            this.getComponent(cc.RigidBody).linearVelocity = cc.v2( 300,this.node.position.y);
            //this.node.setPosition(this.node.position.x += 300*dt, this.node.position.y)
        }

        // if (this.movimento == 2) {
        //     //this.getComponent(cc.RigidBody).linearVelocity = cc.v2( this.node.position.x , 300);
        //     //this.node.setPosition(this.node.position.x, this.node.position.y += 600*dt)
        //     this.getComponent(cc.RigidBody).linearVelocity = cc.v2(this.node.position.x, this.node.position.y += 300*dt)
        // }
             
    }
}