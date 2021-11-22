

class MenuScene extends Phaser.Scene {
    constructor(){
        super('MenuScene');
    }


    preload() {
    this.load.image('menubackground', 'public/gameassets/background.png');
    this.load.image('logo', 'public/gameassets/logo.png');
    this.load.image('play', 'public/gameassets/playbutton.png');
}

    create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(0, 0, 'menubackground').setOrigin(0, 0).setScale(1.3);
    this.add.image(0, 0, 'logo').setOrigin(0, 0).setScale(1.0);
    this.add.image(0, 0, 'play').setOrigin(-0.15, -8).setScale(1.0).setInteractive( {useHandCursor: true}).on('pointerdown', () => this.scene.start('LoadScene'));
    }


}

export default MenuScene;
