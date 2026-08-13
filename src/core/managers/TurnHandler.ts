import { player } from "../../pages/MainMenu";
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

export function processTurn(attacker:Monster, defender:Monster, move:Move){

    let turnPhase: TurnPhase;
    
    switch(turnPhase){
        case TurnPhase.PLAYERTURN:
            turnPhase = TurnPhase.ENEMYTURN;
            break;
        case TurnPhase.ENEMYTURN:
            TurnPhase.PLAYERTURN;
            break;
    }
}