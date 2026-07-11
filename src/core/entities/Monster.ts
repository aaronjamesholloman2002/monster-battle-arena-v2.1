import type { Creature } from "../enums/Creature";
import type { Type } from "../enums/Type";
import type { PassiveSkill } from "./PassiveSkill";

export interface Monster {
    name: string;
    creature: Creature;
    type: Type;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    passives: PassiveSkill[];
  }