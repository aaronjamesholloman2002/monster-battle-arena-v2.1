import { player } from "../../pages/MainMenu";
import { BattleSystem } from "../../systems/BatlteSystem";
import type { Player } from "../entities/Player";
import { type Monster } from "../entities/Monster";
import { TurnPhase } from "../enums/TurnPhase";
import { Rarity } from "../enums/Rarity";
import { Creature } from "../enums/Creature";
import { Type } from "../enums/Type";
import { beakDance } from "../databases/MovesDatabase";

const enemy:Monster = {
    id: "0003",
    speciesID: "",
    rarity: Rarity.COMMON,
    name: "Whifdraft",
    creature: Creature.MONKEY,
    type: Type.FIRE,
    hp: 120,
    attack: 40,
    defense: 30,
    speed: 70,
    accuracy: 80,
    evasion: 90,
    move: beakDance,
    passives: []
}

export class TurnHandler{

    // private static turnCount: Number = 0;

    // static processTurn(){
        
    //     let turnPhase: TurnPhase = TurnPhase.PLAYERTURN;

    //     switch(turnPhase){
    //         case TurnPhase.PLAYERTURN:
    //             BattleSystem.executeMove(player.team[0], enemy, player.team[0].move);
    //             turnPhase = TurnPhase.ENEMYTURN
    //             break;
    //         // case TurnPhase.ENEMYTURN:
    //         //     BattleSystem.executeMove(enemy, player.team[0], enemy.move)
    //         //     break;
    //     }
    // }
}