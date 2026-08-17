import { Rarity } from "../enums/Rarity";
import type { Item } from "./WeaponDatabase";

export const potion: Item = {
    name: "Potion",
    description: "Heals 20% hp",
    rarity: Rarity.COMMON,
    quantity: 0,
    healAmount: 0
}