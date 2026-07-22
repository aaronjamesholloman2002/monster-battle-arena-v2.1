import type { Player } from "../entities/Player";
import type { Monster } from "../entities/Monster";

export function addMonsterToBox(
    player: Player,
    monster: Monster
): Player {

    return {
        ...player,

        monsterBox: [
            ...player.monsterBox,
            monster
        ]
    };
}