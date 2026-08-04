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

    static processTurn(): TurnHandler{
        const turnCount: Number = 0;
        let turnPhase: TurnPhase;

        switch(turnPhase){
            case TurnPhase.PLAYERTURN:
                BattleSystem.executeMove(player.team[0], enemy, player.team[0].move);
                console.log(`${player.team[0].name}'s attack: ${player.team[0].move}, Damage: ${BattleSystem.calculateDamage(player.team[0], enemy, player.team[0].move)}`)
                console.log(`${player.team[0].name}'s HP: ${player.team[0].hp}`);
                console.log(`${enemy.name}'s HP: ${enemy.hp}`);
                break;
            case TurnPhase.ENEMYTURN:
                BattleSystem.executeMove(enemy, player.team[0], enemy.move)
                console.log(`${player.team[0].name}'s attack: ${player.team[0].move}, Damage: ${BattleSystem.calculateDamage(enemy, player.team[0] , enemy.move)}`)
                console.log(`${enemy.name}'s HP: ${enemy.hp}`);
                console.log(`${player.team[0].name}'s HP: ${player.team[0].hp}`);
                break;
        }

        return TurnHandler.processTurn()
    }
}