import { CalculationPhase, ModifierType, PassiveBuffType, TriggerType, type PassiveSkillEffect } from "../entities/PassiveSkill";

export const PassiveEffectDict: Record<string, PassiveSkillEffect> = {
    
    "REVENGE_FURRY": {
        modifiers: [{buffType: PassiveBuffType.DEFENSE, phase: CalculationPhase.START_OF_TURN, baseAmount: 40, modifierType: ModifierType.PERCENT, isPercent: true, stackAmount: 50, maxStackLimit: 500}],
        condition: {triggerType: TriggerType.ON_ATTACK_RECEIVED}
    },
    "REGEN_BOOST": {
        modifiers: [{buffType: PassiveBuffType.HEALTH, baseAmount: 500, modifierType: ModifierType.ADD, isPercent: false}],
        condition: {requirements: {hpBelow: 50, turnCount: 4}}
    },
};
