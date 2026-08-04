import type { Monster } from "../entities/Monster";
import { MonsterDatabase } from "../databases/MonsterDatabase";
import { v4 as uuidv4 } from 'uuid';

export class MonsterFactory {

    static create(id: string): Monster {

        const template = Object.values(MonsterDatabase)
            .find(monster => monster.id === id);

        if (!template) {
            throw new Error(`Monster with ID ${id} not found.`);
        }
    // const template = MonsterDatabase[id];
        return {
            ...template,

            // Create a unique instance ID
            id: uuidv4(),
        };
    }

}

