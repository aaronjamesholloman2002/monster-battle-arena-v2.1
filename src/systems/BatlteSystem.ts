import React from "react";
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import type { Move } from "../core/entities/Move";
import { Type } from "../core/enums/Type";
import { TypeChart } from "../core/managers/TypeChart";
import { addAttrValue } from "framer-motion";
import type { BattleAction } from "../core/models/BattleAction";
import type { BattleResult } from "../core/managers/BattleResult";

export class BattleSystem {

    static calculateDamage(
        attacker: Monster, 
        defender: Monster, 
        move: Move): number {

        // 1. Get Base Damage Output
        let damage = attacker.attack * move.attackMultiplier * (100 / (100 + defender.defense));

        // 2. Critical Hit Multiplier
        damage *= this.criticalHit();

        // 3. Type Check / Type Multiplier
        const multiplier =
        TypeChart[move.type]?.[defender.type] ?? 1;

        damage *= multiplier;

        // 4. Similar Type Attack Modifier (STAM / STAB)
        if (attacker.type === move.type) {
            damage *= 1.25;
        }

        // 5. Minimum Damage Calculator (Fail Safe)
        if(damage < 5){
            damage = (Math.floor(Math.random() * 10) + 5);
            // damage = Math.max(5, damage);
        }

        return Math.floor(damage);
    }

    static executeMove(
        attacker: Monster,
        defender: Monster,
        move: Move
    ): Monster {
    
        const damage = this.calculateDamage(
            attacker,
            defender,
            move
        );
    
        this.applyDamage(defender, damage);
    
        return {...defender, hp: Math.max(defender.hp - damage)};
    }

    // static executeBattleActions(
    //     actions: BattleAction[]
    // ): BattleResult[] {

    //     const results: BattleResult[] = [];

    //     const orderedActions = [...actions]
    //         .sort((a, b) => a.order - b.order);

    //     for (const action of orderedActions) {

    //         // Dead attacker cannot act
    //         if (action.attacker.currentHP <= 0) {
    //             continue;
    //         }

    //         // Dead target cannot be attacked
    //         if (action.target.currentHP <= 0) {
    //             continue;
    //         }

    //         const result = this.executeMove(
    //             action.attacker,
    //             action.target,
    //             action.move
    //         );

    //         results.push(result);
    //     }

    //     return results;
    // }

    static applyDamage(
        defender: Monster,
        damage: number
    ) {
    
        defender.hp = Math.max(
            0,
            defender.hp - damage
        );
    
    }

static criticalHit():number{
    const crit = Math.random() < 0.20 ? 1.25 : 1;
    return crit;
}

// static reduceDamage(defender:Monster, attacker:Monster):number{

//     const reduction = (defender.defense / 100);

//     return reduction;
// }

// static startBattle(){}

}