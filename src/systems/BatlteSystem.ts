import React from "react";
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import type { Move } from "../core/entities/Move";

interface enemyBattler{

}

export class BattleSystem {
    static executeMove(attacker: Monster, defender: Monster, move: Move) {
        
        const damage = defender.hp - attacker.attack;
    }
}