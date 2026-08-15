import Phaser from "phaser";
import { PhaserConfig } from "../config/PhaserConfig";

export function createPhaserGame(
    parent: string | HTMLElement
) {
    return new Phaser.Game({
        ...PhaserConfig,
        parent
    });
}