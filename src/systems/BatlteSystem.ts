import type { Monster } from "../core/entities/Monster";
import type { Move } from "../core/entities/Move";
import { TypeChart } from "../core/managers/TypeChart";
import type { BattleMonster } from "../core/batttle/BattleMonster";

export class BattleSystem {

    static createBattleMonster(monster: Monster): BattleMonster {

        return {
            ...monster,
            currentHp: monster.hp,
            maxHp: monster.hp,

            attackStage: 0,
            defenseStage: 0,
            speedStage: 0,
            accuracyStage: 0,
            evasionStage: 0,

            statusEffects: [],
            };
    }

    static calculateDamage(
        attacker: BattleMonster, 
        defender: BattleMonster, 
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
        attacker: BattleMonster,
        defender: BattleMonster,
        move: Move
    ): BattleMonster {
    
        const damage = this.calculateDamage(
            attacker,
            defender,
            move
        );
    
        console.log("========== BATTLE DEBUG ==========");
        console.log("Defender:", defender);
        console.log("Defender name:", defender.name);
        console.log("Defender HP:", defender.currentHp);
        console.log("Defender max HP:", defender.maxHp);
        console.log("Damage:", damage);
        console.log(
            "Is currentHp a number?",
            typeof defender.currentHp === "number"
        );
        console.log(
            "Is currentHp NaN?",
            Number.isNaN(defender.currentHp)
        );
        console.log("==================================");
    
        const newHP = defender.currentHp - damage;
    
        console.log("Calculated new HP:", newHP);
    
        const updatedDefender: BattleMonster = {
            ...defender,
            currentHp: Math.max(0, newHP)
        };
    
        console.log(`${attacker.name} dealt ${damage} damage.`);
        console.log(`${updatedDefender.name} HP: ${updatedDefender.currentHp}`);
    
        return updatedDefender;
    }

//     const stage = DemoStages.find(stage => stage.id === stageId);

// if (!stage) {
//     throw new Error(`Stage ${stageId} not found.`);
// }

// const enemies = stage.enemyIds.map(id =>
//     BattleMonsterFactory.create(id)
// );

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
        defender: BattleMonster,
        damage: number
    ) {
    
        defender.currentHp = Math.max(
            0,
            defender.currentHp - damage
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