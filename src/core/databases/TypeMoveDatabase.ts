import { Type } from "../enums/Type";
import { MoveCategory } from "../enums/MoveCategory";
import type { Move } from "../entities/Move";

export const TypeMoveDatabase: Record<Type, Move[]> = {
    [Type.FIRE]: [
        {
            id: "fire-bite",
            name: "Fire Bite",
            type: Type.FIRE,
            moveCategory: MoveCategory.BASIC,
            power: 30,
            accuracy: 20,
            cooldown: 1,
            animationKey: "fire-bite",
            description: "A basic fire attack."
        },

        {
            id: "fire-blast",
            name: "Fire Blast",
            type: Type.FIRE,
            moveCategory: MoveCategory.BASIC,
            power: 50,
            accuracy: 20,
            cooldown: 3,
            animationKey: "fire-blast",
            description: "Launches a powerful blast of fire."
        }
    ],

    [Type.WATER]: [
        {
            id: "water-shot",
            name: "Water Shot",
            type: Type.WATER,
            moveCategory: MoveCategory.BASIC,
            power: 30,
            accuracy: 20,
            cooldown: 1,
            animationKey: "water-shot",
            description: "Fires a blast of water."
        }
    ],

    [Type.GRASS]: [
        {
            id: "vine-strike",
            name: "Vine Strike",
            type: Type.GRASS,
            moveCategory: MoveCategory.BASIC,
            power: 30,
            accuracy: 20,
            cooldown: 1,
            animationKey: "vine-strike",
            description: "Strikes the enemy with vines."
        }
    ],
    [Type.ELECTRIC]: [],
    [Type.BUG]: [],
    [Type.GHOST]: [],
    [Type.ICE]: [],
    [Type.FLYING]: [],
    [Type.NORMAL]: []
};