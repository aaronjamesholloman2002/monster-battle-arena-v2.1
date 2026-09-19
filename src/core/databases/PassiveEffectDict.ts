import { ModifierType, PassiveBuffType, type PassiveSkillEffect } from "../entities/PassiveSkill";

export const PassiveEffectDict: Record<string, PassiveSkillEffect> = {
    
    "REVENGE_FURRY": {
       condition: {triggerType: "", requirements: {hpBelow: 50, turnCount: 4}},
       modifiers: [{buffType: PassiveBuffType.ATTACK, phase: 0, baseAmount: 50, modifierType: ModifierType.ADD}]
    },
    "REGEN_BOOST": {
        condition: {triggerType: "", requirements: {hpBelow: 50, turnCount: 4}},
        modifiers: [{buffType: PassiveBuffType.HEALTH, phase: 0, baseAmount: 50, modifierType: ModifierType.ADD}]
    },
};
