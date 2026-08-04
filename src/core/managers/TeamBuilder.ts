import type { Player } from "../entities/Player";
import type { Monster, MonsterTemplate } from "../entities/Monster";
import { MonsterFactory } from "./MonsterFactory";


export class TeamBuilder{

    private slotOne;
    private slotTwo;
    private slotThree;

    constructor(slotOne: Monster, slotTwo: Monster, slotThree: Monster){
        this.slotOne = slotOne;
        this.slotTwo = slotTwo;
        this.slotThree = slotThree;
    }

    static setMonster(
        player: Player,
        slot: number,
        monsterId: string
    ) {

        const monster = player.monsterBox.find(
            m => m.id === monsterId
        );

        if (!monster) return;

        player.team[slot] = monster;
    }

    static removeMonster(
        player: Player,
        slot: number
    ) {
        player.team[slot] = null;
    }

    static swapSlots(
        player: Player,
        slotA: number,
        slotB: number
    ) {
        [
            player.team[slotA],
            player.team[slotB]
        ] =
        [
            player.team[slotB],
            player.team[slotA]
        ];
    }
}

export function addMonsterToBox(
    player: Player,
    template: MonsterTemplate
): Player {

    const monster = MonsterFactory.create(template.speciesID);

    return {
        ...player,

        monsterBox: [
            ...player.monsterBox,
            monster
        ]
    };
}