import { rollPathwayEvent, type PathwayChoice } from "../../systems/PathSystem";
import type { PathEvent } from "../entities/PathEvent";
import { Outcome } from "../enums/Outcome";

export class PathwayManager {

    choosePath(path: PathwayChoice): PathEvent {
        const eventType = rollPathwayEvent();

        return this.generateEvent(eventType);
    }

    private generateEvent(
        type: Outcome
    ): PathEvent {

        switch (type) {

            case Outcome.ITEM_APPEAR:
                return this.generateItemEvent();

            case Outcome.STATUS_EFFECT:
                return this.generateStatusEvent();    
                
            case Outcome.STAT_REDUCTION:
                return this.generateStatReductionEvent();

            case Outcome.ENEMY_APPEAR:
                return this.generateEnemyEvent();
        }
    }

    private generateItemEvent(): PathEvent {
        // Generate random item
        return {
            id: crypto.randomUUID(),
            type: Outcome.ITEM_APPEAR,
            description: "You found an item!"
        };
    }

    private generateStatusEvent(): PathEvent {
        // Select random monster
        // Select random status
        return {
            id: crypto.randomUUID(),
            type: Outcome.STATUS_EFFECT,
            description: "You found an item!"
        };
    }

    private generateStatReductionEvent(): PathEvent {
        // Select random monster
        // Select random stat
        return {
            id: crypto.randomUUID(),
            type: Outcome.STAT_REDUCTION,
            description: "You found an item!"
        };
    }

    private generateEnemyEvent(): PathEvent {
        // Generate encounter
        return {
            id: crypto.randomUUID(),
            type: Outcome.ENEMY_APPEAR,
            description: "AN ENEMY HAS OCCURRED !!!"
        };
    }
}