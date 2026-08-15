import Phaser from "phaser";

export class BattleScene extends Phaser.Scene {

    constructor() {
        super("BattleScene");
    }

    create() {

        this.add.text(
            100,
            100,
            "Battle Arena",
            {
                fontSize: "48px",
                color: "#ffffff"
            }
        );

    }
}