
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
import { flamethrower, frostPunch } from "../core/databases/MovesDatabase";
import { MonsterFactory } from "../core/managers/MonsterFactory";

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
    move: flamethrower,
}

// function selectMonster() {

// }

export default function BattleEvent({ }) {

    const player = getPlayer();
    const navigate = useNavigate();

    const [playerSlot, setPlayerSlot] = useState<Player>(player);
    const [slot1, setSlot1] = useState<Monster | null>(null);
    const [slot2, setSlot2] = useState<Monster | null>(null);

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
        console.log(`${player.team[0].name} Max HP: ${player.team[0].hp}`);
        console.log(`Move: ${enemy.move.name},  Damage: ${BattleSystem.calculateDamage(enemy, player.team[0], enemy.move)}`);
        console.log(`${player.team[0].name}'s HP: ${BattleSystem.getCurrHP(enemy, player.team[0], enemy.move)}`);

    }, [player, navigate])



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
            <h1 className="text-6xl text-white font-black">Battle Arena</h1>

            {/* {battleTeam.map(monsters => (
                <button
                    onClick={() => setBattleTeam(monsterTeam)}
                >Set Team</button>
            ))} */}
            <button
                // onClick={() => handleBattleTeam()}
                className="p-2 m-2 text-white bg-blue-300 rounded"
            >Start Battle</button>
            <div className="bg-slate-600 p-5 m-5 border-green-50 border-2 radious">
                {/* <p>{monsterTeam.map(monster => <p key={monster.id.toString()}>{monster.name}</p>)}</p> */}
            </div>
            <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}