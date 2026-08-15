export interface BattleResult {
    damage: number;
    critical: boolean;
    hit: boolean;
    typeMultiplier: number;
    defenderHP: number;
    defeated: boolean;
}