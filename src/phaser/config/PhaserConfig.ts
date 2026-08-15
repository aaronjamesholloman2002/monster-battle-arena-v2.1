import Phaser from "phaser";
import { BootScene } from "../scenes/BootScene";
import { PreloadScene } from "../scenes/PreloadScene";
import { BattleScene } from "../scenes/BattleScene";

export const PhaserConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,

    width: 1280,
    height: 720,

    backgroundColor: "#111827",

    scene: [
        BootScene,
        PreloadScene,
        BattleScene
    ]
};