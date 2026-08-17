import type { Outcome } from "../enums/Outcome";


export interface PathEvent {
    id: string,
    type: Outcome;
    description: string;
}