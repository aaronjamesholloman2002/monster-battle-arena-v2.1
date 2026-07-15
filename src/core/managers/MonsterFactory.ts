import React from "react";
import type { Monster } from "../entities/Monster";
import { Creature } from "../enums/Creature";
import { Type } from "../enums/Type";
import { regenBoost, revengeFurry } from "../databases/PassiveSkillDatabase"
import { Rarity } from "../enums/Rarity";
import { MonsterDatabase } from "../databases/MonsterDatabase";

export class MonsterFactory {

    static create(id: string): Monster {

        const template = MonsterDatabase[id];

        return {

            ...template,

            id: crypto.randomUUID(),

        };

    }

}

