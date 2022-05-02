cc.Class({
    extends: cc.Component,
    properties: {
       audioSource: cc.AudioSource
    },

    start () {
       let canvas = cc.find('Canvas');
       canvas.on('touchstart', this.playAudio, this);
    },

    playAudio () {
      this.audioSource.play();
    }
});