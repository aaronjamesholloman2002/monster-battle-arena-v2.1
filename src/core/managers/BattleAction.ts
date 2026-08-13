import type { BattleMonster } from "../batttle/BattleMonster";
import type { BattleMechanic } from "../entities/BattleMechanic";
import type { Monster } from "../entities/Monster";
import type { Move } from "../entities/Move";

export interface BattleAction {
    attacker: BattleMonster;
    target: BattleMonster;
    move: Move;
    order: number;
}