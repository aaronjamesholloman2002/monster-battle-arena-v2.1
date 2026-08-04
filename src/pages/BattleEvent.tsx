
import type { Player } from "../core/entities/Player";
import type { MonsterTemplate } from "../core/entities/Monster";
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

// const combatant: MonsterTemplate = {
//     id: "0001",
//     name: "Flarant",
//     creature: Creature.ANT,
//     type: Type.FIRE,
//     hp: 60,
//     attack: 20,
//     defense: 30,
//     speed: 80,
//     passives: [],
//     speciesID: "",
//     rarity: Rarity.COMMON,
//     accuracy: 0,
//     evasion: 0,
//     move: null,
// }

// const enemy: MonsterTemplate = {
//     id: "0001",
//     name: "Flarant",
//     creature: Creature.ANT,
//     type: Type.GRASS,
//     hp: 60,
//     attack: 20,
//     defense: 10,
//     speed: 80,
//     passives: [],
//     speciesID: "",
//     rarity: Rarity.COMMON,
//     accuracy: 0,
//     evasion: 0,
//     move: vineSlap,
// }

// function selectMonster() {

// }

export default function BattleEvent({ }) {

    const player = getPlayer();
    const navigate = useNavigate();

    const [playerSlot, setPlayerSlot] = useState<Player>(player);
    const [slot1, setSlot1] = useState<MonsterTemplate | null>(null);
    const [slot2, setSlot2] = useState<MonsterTemplate | null>(null);
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

    // function handleBattle(){

    //     console.log(`Damage: ${BattleSystem.executeMove(player.team[0], enemy, player.team[0].move)}`);
    // }

    useEffect(() => {

        if (!player) {
            navigate("/");
        }
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
                        onClick={() => { }

                        }
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