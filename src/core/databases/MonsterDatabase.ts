import type { Monster } from "../entities/Monster";
import { Creature } from "../enums/Creature";
import { Rarity } from "../enums/Rarity";
import { Type } from "../enums/Type";
import { revengeFurry } from "./PassiveSkillDatabase";

export const MonsterDatabase = {
    
    flarant: {
        id: "0001",
        rarity: Rarity.RARE,
        name: "Flarant",
        creature: Creature.ANT,
        type: Type.FIRE,
        hp: 60,
        attack: 40,
        defense: 55,
        speed: 70,
        passives: [revengeFurry]
    },

    elegiphant: {
        id: "0002",
        name: "Elegiphant",
        creature: Creature.ELEPHANT,
        type: Type.WATER,
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        passives: []
    },

    plantrum: {
        id: "0003",
        name: "Plantrum",
        creature: Creature.PLANT,
        type: Type.GRASS,
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        passives: []
    },

    caterpule: {
        id: "0004",
        rarity: Rarity.UNCOMMON,
        name: "Caterpule",
        creature: Creature.CATERPILLAR,
        type: Type.BUG,
        hp: 90,
        attack: 40,
        defense: 40,
        speed: 60,
        passives: [],
      },

      voltrab: {
        id: "0005",
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

      Iglio: {
        id: "0006",
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
        rarity: Rarity.ULTRARARE,
        name: "Iglio",
        creature: Creature.PENGUIN,
        type: Type.ICE,
        hp: 100,
        attack: 45,
        defense: 90,
        speed: 80,
        passives: [],
      }
}

