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
import { TriggerType } from "../enums/TriggerType";
import { attrEffect } from "framer-motion";

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

export function processTurn(attacker:Monster, defender:Monster, move:Move){
    
    switch(turnPhase){
        case TurnPhase.PLAYERTURN:
            BattleSystem.executeMove(attacker, defender, attacker.move)
            turnPhase = TurnPhase.ENEMYTURN;
            break;
        case TurnPhase.ENEMYTURN:
            BattleSystem.executeMove(defender, attacker, defender.move)
            TurnPhase.PLAYERTURN;
            break;
    }
}