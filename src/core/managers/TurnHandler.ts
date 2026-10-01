import { BattleSystem } from "../../systems/BatlteSystem";
import type { Player } from "../entities/Player";
import { type Monster } from "../entities/Monster";
import { TurnPhase } from "../enums/TurnPhase";
import { Rarity } from "../enums/Rarity";
import { Creature } from "../enums/Creature";
import { Type } from "../enums/Type";
import { beakDance } from "../databases/MovesDatabase";
import { getPlayer } from "../../store/GameStore";
import { useState } from "react";
import type { BattleState } from "../batttle/BattleState";
import type { Move } from "../entities/Move";
import { attrEffect } from "framer-motion";
import type { BattleMonster } from "../batttle/BattleMonster";

const battleState: BattleState = {
    turn: 0,
    playerTeam: [],
    enemyTeam: [],
    currentPlayer: 0,
    currentEnemy: 0,
    phase: "SELECT_ATTACKERS",
    winner: "PLAYER",
    actions: []
}

let turnPhase: TurnPhase;
const player = getPlayer();

export function processTurn(attacker: BattleMonster, defender: BattleMonster){
    
    switch(turnPhase){
        case TurnPhase.TURN_START:
            break;
        case TurnPhase.PLAYER_ATTACK:
            break;
        case TurnPhase.ENEMY_ATTACK:
            break;
        case TurnPhase.TURN_END:
            break;
        case TurnPhase.TURN_RESET:
            break;
        }
}