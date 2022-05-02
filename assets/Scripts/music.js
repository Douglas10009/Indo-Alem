// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,


  
        properties: {
            audioSource: {
                type: cc.AudioSource,
                default: null
            },
        },

        
        

        play: function () {
            this.audioSource.play();
            musica = 1;
        },
        pause: function () {
            this.audioSource.pause();
            musica = 0;
        },
        stop: function () {
            this.audioSource.stop();
            musica = 0;
        },

        musica: function () {
            var musica = 1; //Musica ligada
            this.node.on('touchstart', function(event){
            
            if (musica == 1) {
                this.stop();

            }else if (musica == 0){
                this.play();

            }}, this)
         },
    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
         this.musica(); 
        
    },


    start () {

    },

    // update (dt) {},
});
