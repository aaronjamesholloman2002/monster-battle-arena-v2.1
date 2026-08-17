import type { BattleMonster } from "../batttle/BattleMonster";
import type { Move } from "./Move";
import { BattleSystem } from "../../systems/BatlteSystem";

export class BattleEngine {

    private playerMon: BattleMonster;
    private opponent: BattleMonster;

    private log: string[] = [];

    constructor(
        playerMon: BattleMonster,
        opponent: BattleMonster
    ) {
        this.playerMon = playerMon;
        this.opponent = opponent;
    }

    public getPlayer(): BattleMonster {
        return this.playerMon;
    }

    public getOpponent(): BattleMonster {
        return this.opponent;
    }

    public getLog(): string[] {
        return this.log;
    }

    public playTurn(
        playerMove: Move,
        opponentMove: Move
    ): boolean {

        this.log = [];

        const playerFirst =
            this.playerMon.speed >= this.opponent.speed;

        const first = playerFirst
            ? this.playerMon
            : this.opponent;

        const second = playerFirst
            ? this.opponent
            : this.playerMon;

        const firstMove = playerFirst
            ? playerMove
            : opponentMove;

        const secondMove = playerFirst
            ? opponentMove
            : playerMove;


        // First monster attacks
        this.executeAction(
            first,
            second,
            firstMove
        );

        if (this.isBattleOver()) {
            return true;
        }


        // Second monster attacks
        this.executeAction(
            second,
            first,
            secondMove
        );

        return this.isBattleOver();
    }


    private executeAction(
        attacker: BattleMonster,
        defender: BattleMonster,
        move: Move
    ): void {

        if (attacker.currentHp <= 0) {
            return;
        }

        this.log.push(
            `${attacker.name} uses ${move.name}!`
        );

        const updatedDefender =
            BattleSystem.executeMove(
                attacker,
                defender,
                move
            );

        if (defender.id === this.playerMon.id) {
            this.playerMon = updatedDefender;
        }

        if (defender.id === this.opponent.id) {
            this.opponent = updatedDefender;
        }

        this.log.push(
            `${updatedDefender.name} HP: ` +
            `${updatedDefender.currentHp}/` +
            `${updatedDefender.maxHp}`
        );

        if (updatedDefender.currentHp <= 0) {

            this.log.push(
                `${updatedDefender.name} has been defeated!`
            );
        }
    }


    public isBattleOver(): boolean {

        return (
            this.playerMon.currentHp <= 0 ||
            this.opponent.currentHp <= 0
        );
    }
}