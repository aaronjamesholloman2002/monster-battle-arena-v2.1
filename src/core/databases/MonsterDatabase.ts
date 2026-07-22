import type { Monster } from "../entities/Monster";
import { Creature } from "../enums/Creature";
import { Rarity } from "../enums/Rarity";
import { Type } from "../enums/Type";
import { regenBoost, revengeFurry } from "./PassiveSkillDatabase";

export const MonsterDatabase = {
    
    flarant: {
        id: "0001",
        speciesID: "🐜",
        rarity: Rarity.COMMON,
        name: "Flarant",
        creature: Creature.ANT,
        type: Type.FIRE,
        // move: ,
        hp: 60,
        attack: 70,
        defense: 55,
        speed: 75,
        passives: [revengeFurry]
    },

    elegiphant: {
        id: "0002",
        speciesID: "🐘",
        rarity: Rarity.COMMON,
        name: "Elegiphant",
        creature: Creature.ELEPHANT,
        type: Type.WATER,
        hp: 120,
        attack: 50,
        defense: 80,
        speed: 40,
        passives: [regenBoost]
    },

    plantrum: {
        id: "0003",
        speciesID: "🌿",
        rarity: Rarity.COMMON,
        name: "Plantrum",
        creature: Creature.PLANT,
        type: Type.GRASS,
        hp: 100,
        attack: 40,
        defense: 30,
        speed: 55,
        passives: []
    },

    caterpule: {
        id: "0004",
        speciesID: "🐛",
        rarity: Rarity.UNCOMMON,
        name: "Caterpule",
        creature: Creature.CATERPILLAR,
        type: Type.BUG,
        hp: 90,
        attack: 40,
        defense: 40,
        speed: 70,
        passives: [],
      },

      voltrab: {
        id: "0005",
        speciesID: "⚡️",
        rarity: Rarity.RARE,
        name: "Voltrab",
        creature: Creature.RABBIT,
        type: Type.ELECTRIC,
        hp: 80,
        attack: 65,
        defense: 50,
        speed: 90,
        passives: [],
      },

      iglio: {
        id: "0006",
        speciesID: "🐧",
        rarity: Rarity.RARE,
        name: "Iglio",
        creature: Creature.PENGUIN,
        type: Type.ICE,
        hp: 120,
        attack: 45,
        defense: 100,
        speed: 60,
        passives: [],
      },

      spectrium: {
        id: "0007",
        speciesID: "👻",
        rarity: Rarity.ULTRARARE,
        name: "Iglio",
        creature: Creature.PENGUIN,
        type: Type.ICE,
        hp: 100,
        attack: 45,
        defense: 90,
        speed: 80,
        passives: [],
      },

      korigon: {
        id: "0008",
        speciesID: "🐲",
        rarity: Rarity.ULTRARARE,
        name: "Korigon",
        creature: Creature.DRAGON,
        type: Type.ICE,
        hp: 180,
        attack: 110,
        defense: 150,
        speed: 90,
        passives: [],
      },

      infernados: {
        id: "0009",
        speciesID: "🐲",
        rarity: Rarity.ULTRARARE,
        name: "Infernados",
        creature: Creature.DRAGON,
        type: Type.FIRE,
        hp: 150,
        attack: 120,
        defense: 100,
        speed: 90,
        passives: [],
      }

      
}

