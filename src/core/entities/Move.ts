import type { MoveCategory } from "../enums/MoveCategory";
import { Type } from "../enums/Type";

export interface Move {

    id: string;

    name: string;

    type: Type;

    moveAccuracy: number;

    moveCategory: MoveCategory;

    animationKey: string,

    attackMultiplier: number;

    cooldown: number;

}