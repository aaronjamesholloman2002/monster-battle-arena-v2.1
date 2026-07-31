import type { Key } from "react";
import type { Creature } from "../enums/Creature";
import type { Type } from "../enums/Type";
import type { PassiveSkill } from "./PassiveSkill";
import type { Rarity } from "../enums/Rarity";
import type { Move } from "./Move";

export interface Monster {
    id: string;
    speciesID: string;
    rarity: Rarity;
    name: string;
    creature: Creature;
    type: Type;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    accuracy: number;
    evasion: number;
    move: Move;
    passives: PassiveSkill[];
  }