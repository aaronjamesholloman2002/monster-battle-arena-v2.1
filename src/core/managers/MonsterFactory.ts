import type { Monster, MonsterTemplate } from "../entities/Monster";
import { MonsterDatabase } from "../databases/MonsterDatabase";
import { v4 as uuidv4 } from 'uuid';

export class MonsterFactory {

    static create(speciesID: string): Monster {

        console.log("Creating monster:", speciesID);

        const template: MonsterTemplate = MonsterDatabase[speciesID];

        if (!template) {
            throw new Error(`Monster with ID ${speciesID} not found.`);
        }
    // const template = MonsterDatabase[id];
        return {
            ...template,
            
            id: uuidv4(),

            currentHP: template.hp,
            level: 1,
            experience: 0,

        };
    }

}

