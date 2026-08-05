
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import { Type } from "../core/enums/Type";
import type { Move } from "../core/entities/Move";
import { getPlayer } from "../store/GameStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Creature } from "../core/enums/Creature";
import type { PassiveSkill } from "../core/entities/PassiveSkill";
import type { StatusEffect } from "../core/enums/StatusEffect";
import { MonsterDatabase } from "../core/databases/MonsterDatabase";
import { Rarity } from "../core/enums/Rarity";
import { BattleSystem } from "../systems/BatlteSystem";
import { flamethrower, frostPunch, vineSlap } from "../core/databases/MovesDatabase";
import { MonsterFactory } from "../core/managers/MonsterFactory";
import { TurnHandler } from "../core/managers/TurnHandler";

const combatant: Monster = {
    id: "0001",
    name: "Flarant",
    creature: Creature.ANT,
    type: Type.FIRE,
    hp: 60,
    attack: 20,
    defense: 30,
    speed: 80,
    passives: [],
    speciesID: "",
    rarity: Rarity.COMMON,
    accuracy: 0,
    evasion: 0,
    move: null,
    level: 0,
    experience: 0,
    speciesIcon: ""
}

const enemy: Monster = {
    id: "0001",
    name: "Flarant",
    creature: Creature.ANT,
    type: Type.GRASS,
    hp: 60,
    attack: 20,
    defense: 10,
    speed: 80,
    passives: [],
    speciesID: "",
    rarity: Rarity.COMMON,
    accuracy: 0,
    evasion: 0,
    move: vineSlap,
    level: 0,
    experience: 0,
    speciesIcon: ""
}

// export interface Combatant {
//     id: string;
//     name: string;
//     isPlayer: boolean;
//     creature?: Creature;
//     type?: Type;
//     maxHp: number;
//     hp: number;
//     attack: number;
//     defense: number;
//     speed: number;
//     passives: PassiveSkill[];
//     statuses: StatusEffect[];
// }

// export function monsterToCombatant(m: Monster, tag = ""): Combatant {
//     return {
//         id: `${m.name}-${tag}-${id()}`,
//         name: m.name,
//         isPlayer: false,
//         creature: m.creature,
//         type: m.type,
//         maxHp: m.hp,
//         hp: m.hp,
//         attack: m.attack,
//         defense: 10,
//         speed: m.speed,
//         passives: m.passives,
//         statuses: [],
//     };
// }

// const pick = <T,>(arr: T[]): T => arr[rand(arr.length)];
// const rand = (n: number) => Math.floor(Math.random() * n);

// export function makeRandomEnemyTeam(): Combatant[] {
//     const size = 1 + rand(3); // 1..3
//     const team: Combatant[] = [];
//     for (let i = 0; i < size; i++) {
//         team.push(monsterToCombatant(pick(enemyPool), "e" + i));
//     }
//     return team;
// }

// function selectMonster() {

// }

export default function BattleEvent({ }) {

    const player = getPlayer();
    const navigate = useNavigate();

    const [playerSlot, setPlayerSlot] = useState<Player>(player);
    const [slot1, setSlot1] = useState<Monster | null>(null);
    const [slot2, setSlot2] = useState<Monster | null>(null);
    const [screenState, setScreenState] = useState(0);

    // const startBattle = () => {
    //     setPlayerSlot(player);
    //     setSlot1();
    // }

    // useEffect(() => {
    //     if (!player) { navigate("/") }

    // }, [player, navigate])

    // if (player.team.length === 2) {
    //     return;
    // }

    // function spawnEnemy(): Monster{
    //     return MonsterFactory.create(

    //     )
    // }

    // if (battleTeam.length >= 3) {
    //     return;
    // }

    // function handleBattleTeam() {

    // }

    useEffect(() => {

        if (!player) {
            navigate("/");
        }

        console.log(`Greetings!! ${player.name}`);
        console.log(`${player.team[0].name}'s Max HP: ${player.team[0].hp}`);
        console.log(`Move: ${enemy.move.name},  Damage: ${BattleSystem.executeMove(enemy, player.team[0], enemy.move)}`);
        // console.log(`${player.team[0].name}'s HP: ${BattleSystem.getCurrHP(enemy, player.team[0], enemy.move)}`);

    }, [])



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">

            {screenState === 0 &&
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl text-white font-black">Battle Arena</h1>

                    <button
                        onClick={() => setScreenState(1)}
                        className="p-2 m-2 text-white bg-blue-300 rounded"
                    >Start Battle</button>

                    <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
                </div>
            },
            {screenState === 1 &&
                <div className="flex flex-col items-center justify-center">
                    <button
                        className="bg-red-500 p-2 m-2 rounded-2xl"
                        onClick={() => { TurnHandler.processTurn() }}
                    >Attack</button>

                    <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
                </div>

            }
            {/* {battleTeam.map(monsters => (
                <button
                    onClick={() => setBattleTeam(monsterTeam)}
                >Set Team</button>
            ))} */}

        </div>
    );
}