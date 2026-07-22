import type { ArmorClass } from "../enums/ArmorClass";
import type { Rarity } from "../enums/Rarity";
import type { Type } from "../enums/Type";

export interface Armor {
    name: string;
    ArmorClass: ArmorClass;
    type: Type;
    rarity: Rarity;
    attack: number;
    durability: number;
    speed: number;
  }