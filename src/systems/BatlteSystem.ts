import React from "react";
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import type { Move } from "../core/entities/Move";
import { Type } from "../core/enums/Type";

export class BattleSystem {

    static dealDamage(attacker: Monster, defender: Monster, move: Move): number {
        
        // const damage = this.calculateDamage(attacker, defender, move);

        // return damage;
        let targetDefense = Math.max(1, defender.defense)
        let damage = (attacker.attack * move.attackPower) - targetDefense;
    
    switch(attacker.type){
        case Type.FIRE:
            if(
                defender.type === Type.BUG ||
                defender.type === Type.GRASS ||
                defender.type === Type.ICE
            ){
                damage *= 2;
            }else if(defender.type === Type.FIRE){
                damage *= 0.5;
            }else if(defender.type === Type.WATER){
                damage *= 0.25;
            }else{
                damage *= 1;
            }
            break;
        case Type.WATER:
            if(
                defender.type === Type.FIRE
            ){
                damage *= 2;
            }else if(defender.type === Type.WATER){
                damage *= 0.5;
            }else if (
                defender.type === Type.BUG ||
                defender.type === Type.GRASS ||
                defender.type === Type.ELECTRIC
                ){
                    damage *= 0.25;
                }else{
                    damage *= 1;
                }
        break;
        case Type.GRASS:
            if(
                defender.type === Type.BUG ||
                defender.type === Type.GRASS ||
                defender.type === Type.ICE
            ){
                damage *= 2;
            }else if(defender.type === Type.WATER){
                damage *= 0.25;
            }
        break;
        case Type.ICE:
            if(
                defender.type === Type.BUG ||
                defender.type === Type.GRASS ||
                defender.type === Type.ICE
            ){
                damage *= 2;
            }else if(defender.type === Type.WATER){
                damage *= 0.25;
            }
        break;
        case Type.FLYING:
            if(
                defender.type === Type.BUG ||
                defender.type === Type.GRASS ||
                defender.type === Type.ICE
            ){
                damage *= 2;
            }else if(defender.type === Type.WATER){
                damage *= 0.25;
            }
        break;
    }

    return Math.floor(damage);
    }

// Damage Modifiers
// static calculateDamage(attacker: Monster, defender: Monster, move: Move): number{
    
//     // let targetDefense = Math.max(1, defender.defense)
//     // let damage = (attacker.attack * move.attackPower) / targetDefense;
    
//     // switch(attacker.type){
//     //     case Type.FIRE:
//     //         if(
//     //             defender.type === Type.BUG ||
//     //             defender.type === Type.GRASS ||
//     //             defender.type === Type.ICE
//     //         ){
//     //             damage *= 2;
//     //         }else if(defender.type === Type.FIRE){
//     //             attacker.attack *= 0.5;
//     //         }else if(defender.type === Type.WATER){
//     //             damage *= 0.25;
//     //         }else{
//     //             damage *= 1;
//     //         }
//     //         break;
//     //     case Type.WATER:
//     //         if(
//     //             defender.type === Type.FIRE
//     //         ){
//     //             damage *= 2;
//     //         }else if(defender.type === Type.WATER){
//     //             damage *= 0.5;
//     //         }else if (
//     //             defender.type === Type.BUG ||
//     //             defender.type === Type.GRASS ||
//     //             defender.type === Type.ELECTRIC
//     //             ){
//     //                 damage *= 0.25;
//     //             }else{
//     //                 damage *= 1;
//     //             }
//     //     break;
//     //     case Type.GRASS:
//     //         if(
//     //             defender.type === Type.BUG ||
//     //             defender.type === Type.GRASS ||
//     //             defender.type === Type.ICE
//     //         ){
//     //             damage *= 2;
//     //         }else if(defender.type === Type.WATER){
//     //             attacker.attack *= 0.25;
//     //         }
//     //     break;
//     //     case Type.ICE:
//     //         if(
//     //             defender.type === Type.BUG ||
//     //             defender.type === Type.GRASS ||
//     //             defender.type === Type.ICE
//     //         ){
//     //             damage *= 2;
//     //         }else if(defender.type === Type.WATER){
//     //             attacker.attack *= 0.25;
//     //         }
//     //     break;
//     //     case Type.FLYING:
//     //         if(
//     //             defender.type === Type.BUG ||
//     //             defender.type === Type.GRASS ||
//     //             defender.type === Type.ICE
//     //         ){
//     //             damage *= 2;
//     //         }else if(defender.type === Type.WATER){
//     //             attacker.attack *= 0.25;
//     //         }
//     //     break;
//     // }

//     // return damage;
// }

static criticalHit(){}
static reduceDamage(){}
}