import type { PassiveSkill } from "../entities/PassiveSkill";
import { TriggerType } from "../enums/TriggerType";

export const revengeFurry: PassiveSkill = {
    name: "Revenge Furry",
    effect: "+20 Atk",
    trigger: TriggerType.ON_DAMAGE_TAKEN,
  };
  
export const regenBoost: PassiveSkill = {
    name: "Regen Boost",
    effect: "+10 HP",
    trigger: TriggerType.ON_TURN_START,
  };