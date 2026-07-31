import type { Move } from "../entities/Move";
import type { Creature } from "../enums/Creature";
import { MoveCategory } from "../enums/MoveCategory";
import { Type } from "../enums/Type";

// export const MovesDatabase: Record<Creature,  Move[]> = {
// "0001": {
//     id: "0001",
//     name: "Frost Punch",
//     type: Type.ICE,
//     moveCategory: MoveCategory.BASIC,
//     animationKey: "",
//     cooldown: 0,
//     description: ""
// },
// "0002": {
//     id: "0002",
//     name: "Vine Slap",
//     type: Type.GRASS,
//     moveCategory: MoveCategory.BASIC,
//     animationKey: "",
//     cooldown: 0,
//     description: ""
// },
// "0003": {
//     id: "0003",
//     name: "Beak Dance",
//     type: Type.FLYING,
//     moveCategory: MoveCategory.BASIC,
//     animationKey: "",
//     cooldown: 0,
//     description: ""
// }
// }

export const frostPunch: Move = {
    id: "001",
    name: "Frost Punch",
    type: Type.ICE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackPower: 5,
    cooldown: 0,
};

export const vineSlap: Move = {
    id: "002",
    name: "Vine Slap",
    type: Type.GRASS,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackPower: 5,
    cooldown: 0,
};

export const beakDance: Move = {
    id: "003",
    name: "Beak Dance",
    type: Type.FLYING,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackPower: 5,
    cooldown: 0,
};

export const flamethrower: Move = {
    id: "",
    name: "Flamethrower",
    type: Type.FIRE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    attackPower: 6,
    cooldown: 0
}

 