import type { Monster } from "../entities/Monster";
import { MonsterFactory } from "../managers/MonsterFactory";

export interface BattleStage {
    id: number;
    name: string;
    enemies: Monster[];
}

export const DemoStages: BattleStage[] = [
    {
        id: 1,
        name: "Plains",
        enemies: [
            MonsterFactory.create("0004"),
            MonsterFactory.create("0006"),
        ],
    },
    {
        id: 2,
        name: "Beach",
        enemies: [
            MonsterFactory.create("0005"),
        ],
    },
    {
        id: 3,
        name: "Desert",
        enemies: [
            MonsterFactory.create("0008"),
        ],
    },
    {
        id: 4,
        name: "Frost Peaks",
        enemies: [
            MonsterFactory.create("0007"),
            MonsterFactory.create("0011"),
        ],
    },
    {
        id: 5,
        name: "Fire Pit",
        enemies: [
            MonsterFactory.create("0012"),
        ],
    },
];