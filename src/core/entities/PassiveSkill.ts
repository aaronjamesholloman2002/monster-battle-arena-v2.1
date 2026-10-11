import type { BattleMonster } from "../batttle/BattleMonster";

export enum PassiveBuffType {
  HEALTH = "Hp",
  ATTACK = "Atk",
  DEFENSE = "Def",
  SPEED = "Sp",
  ACCURACY = "Acc",
  EVASION = "Ev",
  DAMAGE_REDUCTION = "Damage Reduction" // Dokkan frequently uses damage reduction %
}

export enum ModifierType{
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "x",
  PERCENT = "%"
}

export enum Action {
  ATTACK = "performing an attack",
  SUPER_ATTACK = "performing a Super Attack",
  ULTIMATE_ATTACK = "performing an Ultra Super Attack",
  DODGE = "evading an attack"
}

export enum CalculationPhase {
  START_OF_TURN = "at the start of turn",
  START_OF_EACH_TURN = "at the start of each turn",
  START_OF_BATTLE = "at the start of battle",   // e.g., "ATK & DEF +150% at start of turn"
  END_OF_TURN = "at the end of turn",
  END_OF_BATTLE = "at the end of battle",
  END_OF_EVERY_TURN = "at the end of every turn",
  DURING_ATTACKING_TURN = "during the creature's attacking turn",
}

/*
    Specifies which kind of trigger or state will cause
    the passive skill to offset (passive trigger indicator)
*/

export enum TriggerType {
  ON_TURN_START = "at the start of turn",
  ON_BATTLE_START = "at the start of battle",
  ON_ATTACK_PERFORMED = "after performing an attack",
  ON_ATTACK_RECEIVED = "after receiving an attack",
  AFTER_FINAL_BLOW = "when delivering the final blow",
}

/**
 * 
 */

export interface Condition {
  triggerType?: TriggerType; // e.g., "START_OF_TURN", "BEFORE_ATTACK", "AFTER_RECEIVING_HIT"
  requirements?: {
    hpBelow?: number; // e.g., "when HP is 50% or less"
    turnCount?: number;
         // e.g., "from the 3rd turn from start of battle"
  };
}

export interface BuffModifier {
  buffType: PassiveBuffType;
  modifierType?: ModifierType;
  phase?: CalculationPhase;
  condition?: Condition;
  action?: Action;
  baseAmount?: number; // e.g., 150 for +150%
  isPercent?: boolean;
  
  // Stacking Mechanics (e.g., "+10% per hit, up to 50%")
  stackAmount?: number;
  maxStackLimit?: number; 
  currentStacks?: number;
}

export interface PassiveSkillEffect{
  condition: Condition;
  modifiers?: BuffModifier[];
}

export class PassiveSkill {
  private name: string;
  private effects: PassiveSkillEffect[];

  public constructor(name: string, effects: PassiveSkillEffect[]) {
    this.name = name;
    this.effects = effects;
  }

  public getName(): string {return this.name;}
  public getEffect(): PassiveSkillEffect[]{return this.effects;}

  public toString(): string {
    const formattedEffects = this.effects
      .map(effect => this.formatEffect(effect))
      .filter(text => text.length > 0);

      const content = formattedEffects.length === 0
      ? this.name
      : `${this.name}: ${formattedEffects.join("; ")}`;
  
    return `${content}\n\n\n`;
  }
  
  public formatModifier(mod: BuffModifier): string {
    const parts: string[] = [];

    if (mod.buffType) {
      parts.push(" " + mod.buffType);
    }

    // Buff target
    if(mod.baseAmount !== undefined){
      if (mod.isPercent) {
        parts.push(`+${mod.baseAmount}%`);
      } else if(!mod.isPercent) {
        parts.push(`+${mod.baseAmount}`);
      }else{
        return;
      }
    } else if(mod.buffType == undefined || mod.baseAmount == undefined){
      return "";
    } 
    // parts.push(mod.buffType.find(buff => buff === PassiveBuffType.ATTACK));

    // Operator and amount
    

    /**
     * Phase (e.g., "at the start of turn") gets pushed to the stack 
     * after all other parts of the passive gets pushed (FIFO, and NOT LIFO)
     **/

    if (mod.phase) {
      parts.push(mod.phase);
    }

    // Stacking mechanics
    if (mod.stackAmount) {
      let stackText;
      mod.modifierType ?? ModifierType.ADD;
      if(mod.isPercent == true){
        stackText = `+${mod.stackAmount}% per attack recieved`;
        if (mod.maxStackLimit) {
          stackText += ` (up to ${mod.maxStackLimit}%)`;
        }
        if (mod.currentStacks !== undefined) {
          stackText += ` | current: ${mod.currentStacks}`;
        }
      }else{
        stackText = `(+${mod.stackAmount} per attack reieved)`;
        if (mod.maxStackLimit) {
          stackText += ` (up to ${mod.maxStackLimit})`;
        }
        if (mod.currentStacks !== undefined) {
          stackText += ` | current: ${mod.currentStacks}`;
        }
      }

      parts.push(stackText);
    }

    return parts.join(" ");
  }


  public formatCondition(condition?: Condition): string | null {
    if (!condition) return null;

    const clauses: string[] = [];

    if (condition.triggerType) {
      clauses.push(condition.triggerType);
    }

    if (condition.requirements) {
      const { hpBelow, turnCount } = condition.requirements;
      if (hpBelow !== undefined) {
        clauses.push(`when HP is below ${hpBelow}%`);
      }
      if (turnCount !== undefined) {
        clauses.push(`starting from turn ${turnCount}`);
      }
    }

    return clauses.length > 0 ? clauses.join(" ") : null;
  }

  public formatEffect(effect: PassiveSkillEffect): string {
    const segments: string[] = [];

    if (effect.modifiers && effect.modifiers.length > 0) {
      const modStrings = effect.modifiers.map(mod => this.formatModifier(mod));
      segments.push(modStrings.join(", "));
    }

    const conditionText = this.formatCondition(effect.condition);
    if (conditionText) {
      segments.push(`${conditionText}`);
    }

    return segments.join(" ");
    // return segments.join(": ");
  }
}
