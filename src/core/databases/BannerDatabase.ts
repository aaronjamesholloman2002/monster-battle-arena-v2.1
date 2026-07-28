import { Rarity } from "../enums/Rarity";
import type { SummonBanner } from "../entities/SummonBanner";

    export const StarterBanner = {

        id: "starter-banner",

        name: "Starter Banner",

        monsterIDs: [
            "0001",
            "0002",
            "0003"
        ],

        speciesIDs: [
            " 🐒 ",
            " 🐼 ",
            " 🕊️ "
        ],

        rates: {
            [Rarity.RARE]: 1.0,
        }

    }

    export const LaunchFestival = {

        id: "launch-festival",

        name: "Launch Festival",

        monsterIDs: [
            // "0001",
            // "0004",
            // "0007"
        ],

        rates: {

            [Rarity.RARE]: 0.30,
            [Rarity.UNCOMMON]: 0.50,
            [Rarity.COMMON]: 0.70

        }

    }

    export const DualDragonFestival = {

        id: "dual-dragon-festival",

        name: "Dual Dragon Festival",

        monsterIDs: [
            "0012",
            "0011",
            "0010",
            "0009",
            "0008"
        ],

        speciesIDs: [
            "🐲",
            "🐲",
        ],

        rates: {

            [Rarity.ULTRARARE]: 0.10,
            [Rarity.RARE]: 0.25,
            [Rarity.UNCOMMON]: 0.50,
            [Rarity.COMMON]: 0.80

        }

    }

    export const DragonClawFestival = {

        id: "dragon-claw-festival",

        name: "Dragon Claw Festival",

        monsterIDs: [
            // "0001",
            // "0004",
            // "0007"
        ],

        rates: {

            [Rarity.ULTRARARE]: 0.10,
            [Rarity.RARE]: 0.25,
            [Rarity.UNCOMMON]: 0.50,
            [Rarity.COMMON]: 0.70

        }

    }

    export const LegendaryFestival =  {

        id: "legendary-festival",

        name: "Legendary Festival",

        monsterIDs: [

        ],

        rates: {


            [Rarity.LEGENDARY]: 0.05,
            [Rarity.RARE]: 0.25,
            [Rarity.UNCOMMON]: 0.50,
            [Rarity.COMMON]: 0.70
            
        }

    }