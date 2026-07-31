import React from "react";
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import type { Move } from "../core/entities/Move";
import { Type } from "../core/enums/Type";

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

    static calculateDamage(attacker: Monster, defender: Monster, move: Move): number {
        
        let targetDefense = Math.max(1, defender.defense);
        let damage = (attacker.attack * move.attackPower) - targetDefense;

        switch(move.type){
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
                    defender.type === Type.FLYING
                ){
                    damage *= 2;
                }else if(
                    defender.type === Type.WATER ||
                    defender.type === Type.ICE
                    ){
                    damage *= 0.5;
                }else if(defender.type === Type.FIRE){
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

    static getCurrHP(attacker: Monster , defender: Monster, move: Move): number{

        let targetHP = defender.hp - this.calculateDamage(attacker, defender, move);

        if(targetHP <= 0){
            targetHP = 0;
        }

        return targetHP;
    }

    // static dealDamage(attacker: Monster, defender: Monster, move: Move): number {
    

    //     let targetDefense = Math.max(1, defender.defense);
    //     let damage = (attacker.attack * move.attackPower) - targetDefense;

    // // switch(move.type){
    // //     case Type.FIRE:
    // //         if(
    // //             defender.type === Type.BUG ||
    // //             defender.type === Type.GRASS ||
    // //             defender.type === Type.ICE
    // //         ){
    // //             damage *= 2;
    // //         }else if(defender.type === Type.FIRE){
    // //             damage *= 0.5;
    // //         }else if(defender.type === Type.WATER){
    // //             damage *= 0.25;
    // //         }else{
    // //             damage *= 1;
    // //         }
    // //         break;
    // //     case Type.WATER:
    // //         if(
    // //             defender.type === Type.FIRE
    // //         ){
    // //             damage *= 2;
    // //         }else if(defender.type === Type.WATER){
    // //             damage *= 0.5;
    // //         }else if (
    // //             defender.type === Type.BUG ||
    // //             defender.type === Type.GRASS ||
    // //             defender.type === Type.ELECTRIC
    // //             ){
    // //                 damage *= 0.25;
    // //             }else{
    // //                 damage *= 1;
    // //             }
    // //     break;
    // //     case Type.GRASS:
    // //         if(
    // //             defender.type === Type.BUG ||
    // //             defender.type === Type.GRASS ||
    // //             defender.type === Type.ICE
    // //         ){
    // //             damage *= 2;
    // //         }else if(defender.type === Type.WATER){
    // //             damage *= 0.25;
    // //         }
    // //     break;
    // //     case Type.ICE:
    // //         if(
    // //             defender.type === Type.BUG ||
    // //             defender.type === Type.GRASS ||
    // //             defender.type === Type.FLYING
    // //         ){
    // //             damage *= 2;
    // //         }else if(
    // //             defender.type === Type.WATER ||
    // //             defender.type === Type.ICE
    // //             ){
    // //             damage *= 0.5;
    // //         }else if(defender.type === Type.FIRE){
    // //             damage *= 0.25;
    // //         }
    // //     break;
    // //     case Type.FLYING:
    // //         if(
    // //             defender.type === Type.BUG ||
    // //             defender.type === Type.GRASS ||
    // //             defender.type === Type.ICE
    // //         ){
    // //             damage *= 2;
    // //         }else if(defender.type === Type.WATER){
    // //             damage *= 0.25;
    // //         }
    // //     break;
    // // }

    //     return Math.floor(damage);
    // }

    // static takeDamage(attacker: Monster, defender: Monster, move: Move): number{

    //     let targetDefense = Math.max(1, defender.defense);
    //     let damage = (attacker.attack * move.attackPower) - targetDefense;
    //     let currHP = defender.hp - damage;

    //     if(currHP <= 0){
    //         currHP = 0;
    //     }

    //     return currHP;
    // }

static criticalHit(){}
static reduceDamage(){}
static startBattke(){}
}