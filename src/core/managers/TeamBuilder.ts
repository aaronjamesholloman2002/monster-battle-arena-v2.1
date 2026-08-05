import type { Player } from "../entities/Player";

export class TeamBuilder {

    static addToTeam(
        player: Player,
        monsterId: string
    ): Player {

        const monster = player.monsterBox.find(
            m => m.id === monsterId
        );

        if (!monster) return player;

        // Prevent duplicates
        if (player.team.some(m => m.id === monster.id)) {
            return player;
        }

        // Maximum of 3 monsters
        if (player.team.length >= 3) {
            return player;
        }

        return {
            ...player,
            team: [...player.team, monster],

            monsterBox: player.monsterBox.filter(
                m => m.id !== monsterId
            )
        };     
    }

    static removeFromTeam(
        player: Player,
        monsterId: string
    ): Player {

        const monster = player.team.find(
            m => m.id === monsterId
        );

        if (!monster) return player;

        // Prevent duplicates
        if (player.monsterBox.some(m => m.id === monster.id)) {
            return player;
        }

        // Maximum of 3 monsters

        return {
            ...player,
            monsterBox: [...player.monsterBox, monster],

            team: player.team.filter(
                m => m.id !== monsterId
            )
        };
    }

    static swapSlots(
        player: Player,
        slotA: number,
        slotB: number
    ) {
        [
            player.team[slotA],
            player.team[slotB]
        ] =
        [
            player.team[slotB],
            player.team[slotA]
        ];
    }

}