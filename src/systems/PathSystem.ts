import { Outcome } from "../core/enums/Outcome";
import {v4 as uuidv4} from "uuid";

export interface PathwayChoice{
    id: string;
    label: string;
    icon?: string;
}

export interface PathwayNode {
    id: string;

    leftPath: PathwayChoice;
    rightPath: PathwayChoice;
}

export interface PathwayEventDefinition {
    type: Outcome;
    weight: number;
}

export const pathwayEvents: PathwayEventDefinition[] = [
    {
        type: Outcome.ITEM_APPEAR,
        weight: 40
    },
    {
        type: Outcome.STATUS_EFFECT,
        weight: 25
    },
    {
        type: Outcome.STAT_REDUCTION,
        weight: 15
    },
    {
        type: Outcome.ENEMY_APPEAR,
        weight: 20
    },
];

export function rollPathwayEvent(): Outcome {

    const totalWeight = pathwayEvents.reduce(
        (total, event) => total + event.weight,
        0
    );

    let roll = Math.random() * totalWeight;

    for (const event of pathwayEvents) {

        roll -= event.weight;

        if (roll <= 0) {
            return event.type;
        }
    }

    return Outcome.ITEM_APPEAR;
}

export class PathSystem{

    static generateNode(): PathwayNode {

        return {
            id: uuidv4(),
    
            leftPath: {
                id: uuidv4(),
                label: "Left Path"
            },
    
            rightPath: {
                id: uuidv4(),
                label: "Right Path"
            }
        };
    }
}

