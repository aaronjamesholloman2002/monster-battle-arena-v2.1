import type { TriggerType } from "../enums/TriggerType";
import type { BattleMonster } from "../batttle/BattleMonster";

export enum PassiveBuffType {
  HEALTH = "HP",
  ATTACK = "ATK",
  DEFENSE = "DEF",
  SPEED = "SPD",
  ACCURACY = "ACC",
  EVASION = "EVA",
  DAMAGE_REDUCTION = "Damage Reduction" // Dokkan frequently uses damage reduction %
}

export enum ModifierType{
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "x",
  PERCENT = "%"
}

export enum CalculationPhase {
  START_OF_TURN = 0,   // e.g., "ATK & DEF +150% at start of turn"
  ON_ACTION = 1,       // e.g., "plus an additional ATK +50% when performing a Super Attack"
  DYNAMIC_STACK = 2   // e.g., "+10% DEF per attack received (up to 50%)"
}

export interface Condition {
  triggerType?: string;      // e.g., "START_OF_TURN", "BEFORE_ATTACK", "AFTER_RECEIVING_HIT"
  requirements?: {
    hpBelow?: number;       // e.g., "when HP is 50% or less"
    turnCount?: number;
         // e.g., "from the 3rd turn from start of battle"
  };
}

export interface BuffModifier {
  buffType: PassiveBuffType;
  modifierType?: ModifierType;
  phase: CalculationPhase;
  baseAmount: number;       // e.g., 150 for +150%
  
  // Stacking Mechanics (e.g., "+10% per hit, up to 50%")
  stackAmount?: number;
  maxStackLimit?: number;   
  currentStacks?: number;
}

export interface PassiveSkillEffect{
  condition?: Condition;
  modifiers?: BuffModifier[];
}

export class PassiveSkill {
  private name: string;
  private effects: PassiveSkillEffect[];

  public constructor(name: string , effects: PassiveSkillEffect[]) {
    this.name = name;
    this.effects = effects;
  }

  public getName(): string {return this.name;}
  public getEffect(): PassiveSkillEffect[]{return this.effects;}

  public toString(){
    return this.name + " - " + this.effects.map(effect => effect.modifiers.map(modifyer => modifyer.buffType));
  }
  // public setEffect(effects: PassiveSkillEffect[]) {this.effects = effects;}

  // public evaluateTriggers(trigger: string, context: { currentHpPercent?: number, turn?: number }) {
  //   for (const effect of this.effects) {
  //     const { condition, modifiers } = effect;
      
  //     if (condition.triggerType !== trigger) continue;

  //     // Validate conditional rules
  //     if (condition.requirements?.hpBelow && context.currentHpPercent && context.currentHpPercent > condition.requirements.hpBelow) continue;
  //     if (condition.requirements?.turnCount && context.turn && context.turn < condition.requirements.turnCount) continue;

  //     // Advance dynamic stacking modifiers
  //     for (const mod of modifiers) {
  //       if (mod.stackAmount && mod.maxStackLimit) {
  //         mod.currentStacks = Math.min(
  //           (mod.currentStacks || 0) + 1,
  //           mod.maxStackLimit
  //         );
  //       }
  //     }
  //   }
  // }

  public formatModifierString(mod: BuffModifier, result: string): string {
    
    let buffType: string = `${mod.buffType}`;
    let baseAmount: String = `${mod.baseAmount}`;
    
    switch (mod.modifierType) {
      case ModifierType.ADD:
        // Flat value additions rule layer
        return `${mod.buffType} +${mod.baseAmount}`;
      
      case ModifierType.SUBTRACT:
          // Debuff tracking: checks if percentage or flat, attaches negative operator symbol
          return `${mod.buffType} -${mod.baseAmount}%`;
        
      case ModifierType.MULTIPLY:
          // Multiplicative phase representation layout rules
          return `${mod.buffType} x${mod.baseAmount}`;
          
      case ModifierType.PERCENT:
          // Standard Dokkan style calculation output Layout
          // return `${mod.buffType} +${mod.baseAmount}%`;
          // result = buffType + baseAmount.join("");
          
      default:
        return;
    }

    return result;
  }

}
