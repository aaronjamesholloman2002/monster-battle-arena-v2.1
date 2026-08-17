import type { BattleMonster } from "../batttle/BattleMonster";
import type { Monster } from "../entities/Monster";
import { createBattleMonster } from "../managers/CreateBattleMonster";
import { MonsterFactory } from "../managers/MonsterFactory";

export interface BattleStage {
    id: string;
    name: string;
    // enemyIDs: string[];
    enemies: BattleMonster[];
}

export const DemoStages: BattleStage[] = [
    {
        id: "01",
        name: "Plains",
        // enemyIDs: ["0004", "0006"]
        enemies: [
            createBattleMonster(MonsterFactory.create("0004")),
            createBattleMonster(MonsterFactory.create("0006"))
        ],
    },
    {
        id: "02",
        name: "Beach",
        enemies: [
            createBattleMonster(MonsterFactory.create("0005")),
        ],
    },
    {
        id: "03",
        name: "Desert",
        enemies: [
            createBattleMonster(MonsterFactory.create("0007")),
            createBattleMonster(MonsterFactory.create("0008"))
        ],
    },
    {
        id: "04",
        name: "Frost Peaks",
        enemies: [
            createBattleMonster(MonsterFactory.create("0009")),
            createBattleMonster(MonsterFactory.create("0011"))
        ],
    },
    {
        id: "05",
        name: "Fire Pit",
        enemies: [
            createBattleMonster(MonsterFactory.create("0012"))
        ],
    },
];