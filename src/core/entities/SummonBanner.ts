import { Rarity } from "../enums/Rarity";

export interface SummonBanner {

    id: string;
    name: string;
    monsterIDs: string[];
    speciesIDs: string[];
    rates: {
        [key in Rarity]?: number;
    };
}