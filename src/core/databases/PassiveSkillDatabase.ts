import { PassiveSkill, PassiveBuffType, CalculationPhase, TriggerType } from "../entities/PassiveSkill";
// import { PassiveEffectDict } from "./PassiveEffectDict";

export const PassiveSkillDatabase: Record<string, PassiveSkill> = {
   REVENGE_FURRY: new PassiveSkill("Revenge Furry", [
    {
      condition: { 
        triggerType: TriggerType.ON_ATTACK_RECEIVED,
        requirements: { turnCount: 4 }
      },
      modifiers: [
        { 
          buffType: PassiveBuffType.ATTACK,
          isPercent: true,
          baseAmount: 50,
        }
      ]
    }
  ]),

  REGEN_BOOST: new PassiveSkill("Regen Boost", [
    {
      condition: { 
        requirements: { hpBelow: 50 }
      },
      modifiers: [
        { 
          buffType: PassiveBuffType.HEALTH, 
          phase: CalculationPhase.START_OF_BATTLE, 
          baseAmount: 20,
          isPercent: true,
        }
      ]
    }
  ]),
};

// Freeze the database to ensure passives remain immutable recipes
Object.freeze(PassiveSkillDatabase);

// export const revengeFury = new PassiveSkill("Revenge Fury", [PassiveEffectDict["REVENGE_FURRY"]]);

// export const regenBoost = new PassiveSkill("Regen Boost", [PassiveEffectDict["REGEN_BOOST"]]);