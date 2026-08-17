import type { Monster, MonsterTemplate } from "../entities/Monster";

export interface BattleMonster extends Monster {
    currentHp: number,
    maxHp: number,
    attackStage: number,
    defenseStage: number,
    speedStage: number,
    accuracyStage: number,
    evasionStage: number,
    statusEffects: []
}