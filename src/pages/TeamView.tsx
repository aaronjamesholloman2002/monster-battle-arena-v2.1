import { useNavigate } from "react-router-dom";
import { getPlayer } from "../store/GameStore";
import type { Monster } from "../core/entities/Monster";
import { MonsterCard } from "../components/MonsterCard"
import { useEffect, useState } from "react";

export function TeamView() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);

    /* Navigates Back to the Home Page if player is null 
        or if there is no player being passed through
    */
    useEffect(() => {

        if (!player) {
            navigate("/");
        }

    }, [player, navigate]);

    if (!player) {
        return <p>Loading player...</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
            <h1 className="p-1 text-6xl font-black text-white">{player.name}'s Team</h1>

            {player.team.map(monster => (
                <button
                    className=""
                    key={monster.id}
                    onClick={() => navigate(`/monster/${monster.id}`)}
                >
                    <MonsterCard
                        key={monster.id}
                        monster={monster}
                    />
                </button>

            ))}

            <div className="flex flex-row items-center justify-center gap-4 p-2 m-2 overflow-x-auto flex-shrink:0  w-full text-nowrap">
                {player.monsterBox.map(monster => (
                    <button
                        key={monster.id}
                        onClick={() => navigate(`/monster/${monster.id}`)}
                    >
                        <MonsterCard
                            key={monster.id}
                            monster={monster}
                        />
                    </button>

                ))}
            </div>

            <button
                className="p-2 m-2 text-2xl text-white"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );


}