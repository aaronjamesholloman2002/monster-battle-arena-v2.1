import Phaser from "phaser";

export class PreloadScene extends Phaser.Scene {

    constructor() {
        super("PreloadScene");
    }

    preload() {
        // We'll load assets here later.
    }

    create() {
        this.scene.start("BattleScene");
    }
}