import { MonsterDatabase } from "../core/databases/MonsterDatabase";
import type { Monster } from "../core/entities/Monster";
import { Rarity } from "../core/enums/Rarity";
import { MonsterFactory } from "../core/managers/MonsterFactory";

export function summonMonster(): Monster {
    const roll = Math.random();

    if (roll < 0.05) {
        return getMonsterByRarity(Rarity.LEGENDARY);
    } else if(roll < 0.25){
        return getMonsterByRarity(Rarity.ULTRARARE);
    } else if(roll < 0.50){
        return getMonsterByRarity(Rarity.RARE);
    }else if (roll < 0.75){
        return getMonsterByRarity(Rarity.UNCOMMON);
    }else{
        return getMonsterByRarity(Rarity.COMMON);
    }

}

function getMonsterByRarity(rarity: Rarity): Monster {

    const monsters = Object.values(MonsterDatabase)
        .filter(monster => monster.rarity === rarity);

    if (monsters.length === 0) {
        throw new Error(`No ${rarity} monsters found.`);
    }

    const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];

    return MonsterFactory.create(randomMonster.id);
}
