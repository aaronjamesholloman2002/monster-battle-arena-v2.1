import { number, type PassiveEffect } from "framer-motion";
import type { BattleMonster } from "../batttle/BattleMonster";
import { PassiveSkill, type BuffModifier, type PassiveSkillEffect, ModifierType, PassiveBuffType } from "../entities/PassiveSkill";

export class PassiveSkillManager{

    public processPassive(battleMonster: BattleMonster, mod: BuffModifier){
        
        mod.buffType ?? ModifierType.ADD;
        

        switch(mod.buffType){
            case PassiveBuffType.ATTACK:
                if (mod.isPercent){
                    battleMonster.attack + (mod.baseAmount / 100)
                    battleMonster.attack += mod.baseAmount;
                }
                break;
                case PassiveBuffType.DEFENSE:
                    if (mod.isPercent){
                        battleMonster.attack += mod.baseAmount;
                    }
                    break;
                case PassiveBuffType.SPEED:
                    if (mod.isPercent){
                        battleMonster.attack += mod.baseAmount;
                    }
                    break;
                case PassiveBuffType.ACCURACY:
                    if (mod.isPercent){
                        battleMonster.attack += mod.baseAmount;
                    }
                    break;
                case PassiveBuffType.EVASION:
                    if (mod.isPercent){
                        battleMonster.attack += mod.baseAmount;
                    }
                    break;
        }

        
    }

    public processTurn()
    {
        // for (let i: number = _passives.Count - 1; i >= 0; i--)
        // {
        //     var skill = _passives[i];

        //     // Execute effect if defined
        //     skill.Effect?.Invoke(skill.DurationInTurns);

        //     // Decrement duration if not permanent (-1)
        //     if (skill.DurationInTurns > 0)
        //     {
        //         skill.DurationInTurns--;
        //     }

        //     // Remove if expired
        //     if (skill.IsExpired)
        //     {
        //         _passives.RemoveAt(i);
        //     }
        // }
    }
}
