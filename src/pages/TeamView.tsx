import { useNavigate } from "react-router-dom";
import { getPlayer, setPlayer as savePlayer } from "../store/GameStore";
import type { Monster } from "../core/entities/Monster";
import { MonsterCard } from "../components/MonsterCard"
import { useEffect, useState } from "react";
import { TeamBuilder } from "../core/managers/TeamBuilder";

export function TeamView() {

    const navigate = useNavigate();
    const [player, setPlayer] = useState(() => getPlayer());

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

            {[0, 1, 2].map((slot) => (
                <div
                    key={slot}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        const monsterId = e.dataTransfer.getData("monsterId");
                        const updatedPlayer = TeamBuilder.setMonster(player, slot, monsterId);

                        savePlayer(updatedPlayer);
                        setPlayer(updatedPlayer);

                    }}
                    className="..."
                >
                    {player.team[slot]
                        ? <MonsterCard monster={player.team[slot]} />
                        : `Slot ${slot + 1}`}
                </div>
            ))}


            <div className="flex flex-row items-center justify-center gap-4 p-2 m-2 overflow-x-auto">
                {player.monsterBox.map((monster) => (
                    <div
                        key={monster.id}
                        draggable
                        onDragStart={(e) => {
                            e.dataTransfer.setData("monsterId", monster.id);
                        }}
                    >
                        <MonsterCard monster={monster} />
                    </div>
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