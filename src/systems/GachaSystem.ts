import { MonsterDatabase } from "../core/databases/MonsterDatabase";
import type { Monster } from "../core/entities/Monster";
import type { SummonBanner } from "../core/entities/SummonBanner";
import { Rarity } from "../core/enums/Rarity";
import { MonsterFactory } from "../core/managers/MonsterFactory";

export function summonMonster(
    banner: SummonBanner
): Monster {

    const availableMonsters = banner.monsterIDs
        .map(id => MonsterDatabase[id])
        .filter(Boolean);

    if (availableMonsters.length === 0) {
        throw new Error(
            `Banner "${banner.name}" has no available monsters.`
        );
    }

    const randomIndex = Math.floor(
        Math.random() * availableMonsters.length
    );

    const selectedMonster =
        availableMonsters[randomIndex];

    return MonsterFactory.create(
        selectedMonster.speciesID
    );
}

function getMonsterByRarity(rarity: Rarity): Monster {

    const monsters = Object.values(MonsterDatabase)
        .filter(monster => monster.rarity === rarity);

    if (monsters.length === 0) {
        throw new Error(`No ${rarity} monsters found.`);
    }

    const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];

    return MonsterFactory.create(randomMonster.speciesID);
}
