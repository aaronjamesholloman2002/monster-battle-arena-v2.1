import type { Rarity } from "../enums/Rarity";
import type { Type } from "../enums/Type";
import type { WeaponType } from "../enums/WeaponType";

export interface Weapon {
    name: string;
    weaponType: WeaponType;
    type: Type;
    rarity: Rarity;
    attack: number;
    durability: number;
    speed: number;
  }