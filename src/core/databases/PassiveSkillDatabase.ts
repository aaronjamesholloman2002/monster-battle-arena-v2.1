import { PassiveSkill, PassiveBuffType, CalculationPhase, TriggerType } from "../entities/PassiveSkill";
// import { PassiveEffectDict } from "./PassiveEffectDict";

export const PassiveSkillDatabase: Record<string, PassiveSkill> = {
   REVENGE_FURRY: new PassiveSkill("Revenge Furry", [
    {
      condition: { 
        triggerType: TriggerType.ON_ATTACK_PERFORMED,
        requirements: { turnCount: 4 }
      },
      modifiers: [
        { 
          buffType: PassiveBuffType.ATTACK, 
          phase: CalculationPhase.AFTER_FINAL_BLOW,
          isPercent: true
        }
      ]
    }
  ]),

  REGEN_BOOST: new PassiveSkill("Regen Boost", [
    {
      condition: { 
        triggerType: TriggerType.ON_DAMAGE_TAKEN,
        requirements: { hpBelow: 50, turnCount: 3 }
      },
      modifiers: [
        { 
          buffType: PassiveBuffType.DEFENSE, 
          phase: CalculationPhase.START_OF_TURN, 
          baseAmount: 80,
          stackAmount: 10
        }
      ]
    }
  ]),
};

// Freeze the database to ensure passives remain immutable recipes
Object.freeze(PassiveSkillDatabase);

// export const revengeFury = new PassiveSkill("Revenge Fury", [PassiveEffectDict["REVENGE_FURRY"]]);

// export const regenBoost = new PassiveSkill("Regen Boost", [PassiveEffectDict["REGEN_BOOST"]]);