import type { Player } from "../entities/Player";

import type { PlayerDraft } from "../models/PlayerDraft";

export class PlayerFactory{

    static create(

        draft: PlayerDraft

    ): Player {

        return{

            id: crypto.randomUUID(),

            name: draft.name,

            gender: draft.gender!,

            hp:100,

            attack:20,

            defense:20,

            speed:20,

            team:[draft.starter!],

            monsterBox:[],

            weapons:[],

            items:[]

        };

    }

}