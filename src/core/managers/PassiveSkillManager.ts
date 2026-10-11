import type { BattleMonster } from "../batttle/BattleMonster";
import {
  PassiveSkill,
  type BuffModifier,
  PassiveBuffType,
} from "../entities/PassiveSkill";

export interface ActiveBuff {
  skill: PassiveSkill;
  durationInTurns: number; // e.g., -1 for permanent
  isExpired?: boolean;
}

export class PassiveSkillManager {
  
  private activePassives: ActiveBuff[] = [];

  public processPassive(battleMonster: BattleMonster, mod: BuffModifier): void {
    const isMultiplier = Boolean(mod.isPercent);
    const multiplier = 1 + mod.baseAmount / 100;
    const flatAmount = mod.baseAmount;

    switch (mod.buffType) {
      case PassiveBuffType.ATTACK:
        battleMonster.attack = isMultiplier
          ? Math.round(battleMonster.attack * multiplier)
          : battleMonster.attack + flatAmount;
        break;

      case PassiveBuffType.DEFENSE:
        battleMonster.defense = isMultiplier
          ? Math.round(battleMonster.defense * multiplier)
          : battleMonster.defense + flatAmount;
        break;

      case PassiveBuffType.SPEED:
        battleMonster.speed = isMultiplier
          ? Math.round(battleMonster.speed * multiplier)
          : battleMonster.speed + flatAmount;
        break;

      case PassiveBuffType.ACCURACY:
        battleMonster.accuracy = isMultiplier
          ? Math.round(battleMonster.accuracy * multiplier)
          : battleMonster.accuracy + flatAmount;
        break;

      case PassiveBuffType.EVASION:
        battleMonster.evasion = isMultiplier
          ? Math.round(battleMonster.evasion * multiplier)
          : battleMonster.evasion + flatAmount;
        break;
    }
  }

  public processTurn(): void {
    // Iterate backwards so splicing doesn't skip indices
    for (let i = this.activePassives.length - 1; i >= 0; i--) {
      const active = this.activePassives[i];

      // Decrement duration if temporary (> 0). -1 indicates permanent.
      if (active.durationInTurns > 0) {
        active.durationInTurns--;
      }

      // Check for expiration
      if (active.durationInTurns === 0 || active.isExpired) {
        this.activePassives.splice(i, 1);
      }
    }
  }

  public addActivePassive(
    skill: PassiveSkill,
    durationInTurns: number
  ): void {
    this.activePassives.push({
        skill,
        durationInTurns
    });
  }
}