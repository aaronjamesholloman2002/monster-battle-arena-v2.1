import type { BattleMonster } from "../batttle/BattleMonster";
import type { Monster, MonsterTemplate } from "../entities/Monster";
import { v4 as uuidv4 } from 'uuid';

export function createBattleMonster(monster: Monster): BattleMonster {
    return {
        // BattleMonster Template Initiated off of a Monster Instance
        // Monster
        id: monster.id,
        level: monster.level,
        experience: monster.experience,
        
        // Properties that belong to the Monster Template
        speciesID: monster.speciesID,
        speciesIcon: monster.speciesIcon,
        rarity: monster.rarity,
        name: monster.name,
        creature: monster.creature,
        type: monster.type,
        hp: monster.hp,
        attack: monster.attack,
        defense: monster.defense,
        speed: monster.speed,
        accuracy: monster.accuracy,
        evasion: monster.evasion,
        move: monster.move,
        passives: monster.passives,
        
        // BattleMonster
        currentHp: monster.hp,
        maxHp: monster.hp,
        attackStage: 0,
        defenseStage: 0,
        speedStage: 0,

        accuracyStage: 0,
        evasionStage: 0,

        statusEffects: []
    };
}