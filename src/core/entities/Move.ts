import type { MoveCategory } from "../enums/MoveCategory";
import { Type } from "../enums/Type";

export interface Move {

    id: string;

    name: string;

    type: Type;

    moveCategory: MoveCategory;

    animationKey: string,

    attackPower: number;

    cooldown: number;

}