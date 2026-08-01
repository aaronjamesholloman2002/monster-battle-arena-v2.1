import { Type } from "../enums/Type";

export const TypeChart = {

    [Type.FIRE]: {

        // Type Advantage: attack bonus = x2
        [Type.GRASS]: 2,
        [Type.BUG]: 2,
        [Type.ICE]: 2,

        //Type Neutral
        [Type.FIRE]: 0.50,
        
        //Type Disadvantage
        [Type.WATER]: 0.25

    },

    [Type.WATER]: {

        [Type.FIRE]: 2,
        [Type.WATER]: 0.50,
        [Type.ICE]: 0.50,
        [Type.GRASS]: 0.25,
        [Type.ELECTRIC]: 0.25
    },

    [Type.GRASS]: {

        [Type.WATER]: 2,
        [Type.GRASS]: 0.50,
        [Type.BUG]: 0.50,
        [Type.ICE]: 0.25,
        [Type.FIRE]: 0.25
    },
    [Type.FLYING]: {

        [Type.GRASS]: 2,
        [Type.BUG]: 2,
        [Type.FLYING]: 0.50,
        [Type.ELECTRIC]: 0.25,
        [Type.ICE]: 0.25,
    },
    [Type.ICE]: {

        [Type.WATER]: 2,
        [Type.GRASS]: 2,
        [Type.BUG]: 2,
        [Type.ICE]: 0.50,
        [Type.FIRE]: 0.25
    },

};