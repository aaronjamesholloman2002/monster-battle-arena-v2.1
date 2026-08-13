import type { TurnPhase } from "../enums/TurnPhase";
import type { BattleAction } from "../managers/BattleAction";
import type { BattleMonster } from "./BattleMonster";

export interface BattleState {

    playerTeam: BattleMonster[];
    
    enemyTeam: BattleMonster[];

    actions: BattleAction[];
    
    turn: number;
    
    currentPlayer: number;

    currentEnemy: number;

    phase: | "SELECT_ATTACKERS" | "SELECT_TARGETS" | "RESOLVING" | "TURN_END" | "BATTLE_END";

    winner: "PLAYER" | "ENEMY" | null;
}