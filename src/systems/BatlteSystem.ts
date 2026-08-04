import React from "react";
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import type { Move } from "../core/entities/Move";
import { Type } from "../core/enums/Type";
import { TypeChart } from "../core/managers/TypeChart";
import type { StatusEffect } from "../core/enums/StatusEffect";

/*
    Entire File Consists of battle logic that handles calculations for stasts, 
    processing damage, and handling stats changes(includes the use of buffs and debuffs)
*/

// Battle Result ...
export interface BattleResult {

    damage: number;

    critical: boolean;

    hit: boolean;

    typeMultiplier: number;

    defenderHP: number;

    defeated: boolean;
}

// Battle Monster Referenced from Monster Model
export interface BattleMonster {

    monster: Monster;

    currentHP: number;

    attackStage: number;
    defenseStage: number;
    speedStage: number;

    accuracyStage: number;
    evasionStage: number;

    statusEffects: StatusEffect[];
}

// Battle Monster Gets Initiatialized
function createBattleMonster(monster: Monster): BattleMonster {
    return {
        monster,

        currentHP: monster.hp,

        attackStage: 0,
        defenseStage: 0,
        speedStage: 0,

        accuracyStage: 0,
        evasionStage: 0,

        statusEffects: []
    };
}

// StageChart
export const StageChart: Record<number, number> = {
    [-6]: 0.25,
    [-5]: 0.28,
    [-4]: 0.33,
    [-3]: 0.40,
    [-2]: 0.50,
    [-1]: 0.66,
     0: 1.00,
     1: 1.50,
     2: 2.00,
     3: 2.50,
     4: 3.00,
     5: 3.50,
     6: 4.00,
};

// AccuracyStageChart 🔎
export const AccuracyStageChart: Record<number, number> = {
    [-6]: 0.33,
    [-5]: 0.38,
    [-4]: 0.43,
    [-3]: 0.50,
    [-2]: 0.60,
    [-1]: 0.75,
     0: 1.00,
     1: 1.33,
     2: 1.66,
     3: 2.00,
     4: 2.33,
     5: 2.66,
     6: 3.00,
};

export class BattleSystem {

    // private static turn: number;
    // private static damage: number;
    // private static currHP: number;
    // private static targetDefense: number;

    // static getTurn(): number{
    //     return this.turn;
    // }
    // static setTurn(turn: number){
    //     this.turn = turn;
    // }

    static getAttack(monster: BattleMonster): number {

        const multiplier = StageChart[monster.attackStage];
    
        return Math.floor(
            monster.monster.attack * multiplier
        );
    }

    static calculateDamage(attacker: BattleMonster, defender: BattleMonster, move: Move): BattleResult {

        // 1. Get Base Damage Output
        const attack = this.getAttack(attacker);

        const hit = this.checkAccuracy(attacker, defender, move);

        const defense =
        defender.monster.defense *
        StageChart[defender.defenseStage];

        let damage =
        attack *
        move.attackMultiplier *
        (100 / (100 + defense));

        // 2. Critical Hit Multiplier
        const critical = this.isCriticalHit();
        if(critical){
            damage *= 2;
        }

        // 3. Type Check / Type Multiplier
        const multiplier =
        TypeChart[move.type]?.[defender.monster.type] ?? 1;

        damage *= multiplier;

        // 4. Similar Type Attack Modifier (STAM / STAB)
        if (attacker.monster.type === move.type) {
            damage *= 1.25;
        }

        const finalDamage = Math.floor(damage);

        // 5. Minimum Damage Calculator (Fail Safe)
        // if(damage < 5){
        //     return damage = (Math.floor(Math.random() * 10) + 5);
        // }

        if(!hit){
            return{
                damage: 0,
                critical: false,
                hit: false,
                typeMultiplier:1,
                defenderHP: defender.currentHP,
                defeated: false,
            }
        };

        return {
            damage,
            critical,
            hit: true,
            typeMultiplier: multiplier,
            defenderHP: defender.currentHP,
            defeated: defender.currentHP === 0
        };
    }
    static checkAccuracy(attacker: BattleMonster, defender: BattleMonster, move: Move):boolean {
        throw new Error("Method not implemented.");
    }

    static executeMove(
        attacker: BattleMonster,
        defender: BattleMonster,
        move: Move
    ): BattleResult {
    
        const result = this.calculateDamage(
            attacker,
            defender,
            move
        );
    
        if(result.hit)
        {
            this.applyDamage(defender, result.damage);
        }
    
        return {
            ...result,
            defenderHP: defender.currentHP,
            defeated: defender.currentHP <= 0
        };
    }

    static applyDamage(
        defender: BattleMonster,
        damage: number
    ) {
    
        defender.currentHP = Math.max(
            0,
            defender.currentHP - damage
        );
    
    }

    static isCriticalHit():boolean{
        
        return Math.random() < 0.10;
    }

    static reduceDamage(){}
    static startBattle(){}
}