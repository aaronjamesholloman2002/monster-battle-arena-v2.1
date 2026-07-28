
import type { Player } from "../core/entities/Player";
import type { Monster } from "../core/entities/Monster";
import type { Type } from "../core/enums/Type";
import type { Move } from "../core/entities/Move";
import { getPlayer } from "../store/GameStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Creature } from "../core/enums/Creature";
import type { PassiveSkill } from "../core/entities/PassiveSkill";
import type { StatusEffect } from "../core/enums/StatusEffect";

export interface Combatant {
    id: string;
    name: string;
    isPlayer: boolean;
    creature?: Creature;
    type?: Type;
    maxHp: number;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    passives: PassiveSkill[];
    statuses: StatusEffect[];
}

function selectMonster() {

}

export default function BattleEvent() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [monsterTeam, setMonsterTeam] = useState<Monster[]>([]);
    // const [playerSlot, setPlayerSlot] = useState<Player>(player);
    // const [slot1, setSlot1] = useState<Monster | null>(null);
    // const [slot2, setSlot2] = useState<Monster | null>(null);
    // const startBattle = () => {
    //     setPlayerSlot(player);
    // }

    useEffect(() => {
        if (!player) { navigate("/") }
        setMonsterTeam(
            player.team
        )
    }, [player, navigate])

    if (monsterTeam.length === 2) {
        return;
    }
    // if (battleTeam.length >= 3) {
    //     return;
    // }

    // function handleBattleTeam() {

    // }



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
                <p>{monsterTeam.map(monster => <p key={monster.id.toString()}>{monster.name}</p>)}</p>
            </div>
            <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}