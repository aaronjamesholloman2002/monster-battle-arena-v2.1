import { PassiveSkill, PassiveBuffType, CalculationPhase } from "../entities/PassiveSkill";
import { PassiveEffectDict } from "./PassiveEffectDict";

// export const PassiveSkillDatabase: Record<string, PassiveSkill> = {
//    REVENGE_FURRY: new PassiveSkill("Revenge Furry", [
//     {
//       id: 101,
//       condition: { 
//         triggerType: "AFTER_RECEIVING_HIT",
//         requirements: { turnCount: 4 }
//       },
//       modifiers: [
//         { 
//           buffType: PassiveBuffType.ATTACK, 
//           phase: CalculationPhase.ON_ACTION, 
//           baseAmount: 50,
//           stackAmount: 10
//         },
//         { 
//           buffType: PassiveBuffType.DEFENSE, 
//           phase: CalculationPhase.ON_ACTION, 
//           baseAmount: 50,
//           stackAmount: 10
//         }
//       ]
//     }
//   ]),

//   REGEN_BOOST: new PassiveSkill("Regen Boost", [
//     {
//       id: 102,
//       condition: { 
//         triggerType: "START_OF_TURN",
//         requirements: { hpBelow: 50, turnCount: 3 }
//       },
//       modifiers: [
//         { 
//           buffType: PassiveBuffType.DEFENSE, 
//           phase: CalculationPhase.START_OF_TURN, 
//           baseAmount: 80,
//           stackAmount: 10
//         }
//       ]
//     }
//   ]),
// };

// // Freeze the database to ensure passives remain immutable recipes
// Object.freeze(PassiveSkillDatabase);

export const revengeFury = new PassiveSkill("Revenge Fury", [PassiveEffectDict["REVENGE_FURRY"]]);

export const regenBoost = new PassiveSkill("Regen Boost", [PassiveEffectDict["REGEN_BOOST"]]);