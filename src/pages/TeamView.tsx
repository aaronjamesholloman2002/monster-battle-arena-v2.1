import { useNavigate } from "react-router-dom";
import { getPlayer } from "../store/GameStore";
import type { Monster } from "../core/entities/Monster";
import { MonsterCard } from "../components/MonsterCard"
import { useState } from "react";

export function TeamView() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);

    if (!player) {
        navigate("/");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
            <h1 className="p-1 text-6xl font-black">{player.name}'s Team</h1>

            {/* {player.team.map(monster => (
                // <p key={monster.id} className="text-white">
                <button
                    key={monster.id}
                    className="text-white"
                // onClick={}
                >{monster.name}</button>
            ))} */}

            {player.team.map(monster => (
                <button
                    className=""
                    onClick={() => navigate(`/monster/${monster.id}`)}
                >
                    <MonsterCard
                        key={monster.id}
                        monster={monster}
                    />
                </button>

            ))}

            <button
                className="p-2 m-2 text-2xl text-white"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );


}