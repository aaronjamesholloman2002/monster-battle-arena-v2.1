// import { MovesDatabase } from "../databases/MovesDatabase";
// import type { Move } from "../entities/Move";
// import { v4 as uuidv4 } from 'uuid';

// export class MovesFactory {
//     static create(id: string): Move {

//         const template = Object.values(MovesDatabase)
//             .find(monster => monster.id === id);

//         if (!template) {
//             throw new Error(`Monster with ID ${id} not found.`);
//         }
//     // const template = MonsterDatabase[id];
//         return {
//             ...template,

//             // Create a unique instance ID
//             id: uuidv4(),
//         };
//     }
// }