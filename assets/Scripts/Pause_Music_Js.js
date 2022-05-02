cc.Class({
    extends: cc.Component,
    properties: {
       audioSource: cc.AudioSource
    },

    start () {
       let canvas = cc.find('Canvas');
       canvas.on('touchstart', this.pauseAudio, this);
    },

    pauseAudio () {
      this.audioSource.pause();
    }
});