import type { Rarity } from "../enums/Rarity";

export interface Item {
    name: string;
    description: string;
    rarity: Rarity;
    quantity: number;
    healAmount?: number;
  }