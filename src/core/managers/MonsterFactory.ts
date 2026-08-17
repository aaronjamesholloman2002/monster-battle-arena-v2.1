import type { Monster } from "../entities/Monster";
import { MonsterDatabase } from "../databases/MonsterDatabase";
import { v4 as uuidv4 } from 'uuid';
import { number } from "framer-motion";

export class MonsterFactory {

    static create(speciesID: string): Monster {

        const template = MonsterDatabase[speciesID];

        console.log("MONSTER DATABASE TEMPLATE:", template);

        if (!template) {
            throw new Error(`Monster with ID ${speciesID} not found.`);
        }
        
    // const template = MonsterDatabase[id];
        return {
            ...template,
            id: uuidv4(),
            level: 1,
            experience: 5
        };
    }

}

