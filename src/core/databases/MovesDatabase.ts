import type { Move } from "../entities/Move";
import { MoveCategory } from "../enums/MoveCategory";
import { Type } from "../enums/Type";

export const firePunch: Move = {
    id: "0001",
    name: "Fire Punch",
    type: Type.FIRE,
    moveCategory: MoveCategory.BASIC,
    animationKey: "",
    power: 0,
    accuracy: 0,
    cooldown: 0,
    description: ""
}