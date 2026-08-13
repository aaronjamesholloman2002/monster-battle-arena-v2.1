import type { Move } from "../entities/Move";
import type { Creature } from "../enums/Creature";
import { MoveCategory } from "../enums/MoveCategory";
import { Type } from "../enums/Type";

export const frostpunch: Move = {
    id: "001",
    name: "Frost Punch",
    type: Type.ICE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 3,
    cooldown: 0,
};

export const vineslap: Move = {
    id: "002",
    name: "Vine Slap",
    type: Type.GRASS,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 2,
    cooldown: 0,
};

export const beakDance: Move = {
    id: "003",
    name: "Beak Dance",
    type: Type.FLYING,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 2,
    cooldown: 0,
};
export const firepinch: Move = {
    id: "004",
    name: "Fire Pinch",
    type: Type.FIRE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 2,
    cooldown: 0,
};
export const bubbleslap: Move = {
    id: "005",
    name: "Bubble Slap",
    type: Type.WATER,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 2,
    cooldown: 0
};
export const bugbite: Move = {
    id: "006",
    name: "Bug Bite",
    type: Type.BUG,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 1,
    cooldown: 0
};
export const thunderbolt: Move = {
    id: "007",
    name: "Thunderbolt",
    type: Type.ELECTRIC,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 2,
    cooldown: 0
};
export const icybreath: Move = {
    id: "008",
    name: "Icy Breath",
    type: Type.ICE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 3,
    cooldown: 0
};
export const flamethrower: Move = {
    id: "009",
    name: "Flamethrower",
    type: Type.FIRE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackMultiplier: 3,
    cooldown: 0
};

 