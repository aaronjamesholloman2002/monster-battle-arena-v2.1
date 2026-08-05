import { useNavigate } from "react-router-dom";
import { getPlayer, setPlayer as savePlayer } from "../store/GameStore";
import type { Monster } from "../core/entities/Monster";
import { MonsterCard } from "../components/MonsterCard"
import { useEffect, useState } from "react";
import { TeamBuilder } from "../core/managers/TeamBuilder";
import { motion } from "framer-motion";

// interface MonsterButtonProps {
//     monster: Monster;
//     onAdd?: () => void;
//     onRemove?: () => void;
// }

export function TeamView({ }) {

    const [player, setCurrentPlayer] = useState(() => getPlayer());
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
    console.log(player.team.map(m => ({
        id: m.id,
        name: m.name
    })));

    console.log(player.monsterBox.map(m => m.id));

    console.log(selectedMonster);

    const handleAdd = (monsterId: string) => {

        if (!player) return;

        if (player.team.length == 3) {
            alert("Team Limit Reached!!!");
        }

        const updatedPlayer =
            TeamBuilder.addToTeam(player, monsterId);

        setCurrentPlayer(updatedPlayer);
        savePlayer(updatedPlayer);
    };

    const handleRemove = (monsterId: string) => {

        if (!player) return;

        const updatedPlayer =
            TeamBuilder.removeFromTeam(player, monsterId);

        setCurrentPlayer(updatedPlayer);
        savePlayer(updatedPlayer);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
            <h1 className="p-1 text-6xl font-black text-white">{player.name}'s Team</h1>

            <div className="flex flex-row items-center justify-center gap-4 p-2 m-2 overflow-x-auto flex-shrink:0  w-full text-nowrap">
                {player.team.map(monster => (
                    <motion.div
                        draggable
                        // onDragStart={(e) => { e.dataTransfer.setData("monsterId", monster.id) }}
                        key={monster.id}
                        className="flex flex-col items-center justify-center p-2 m-2 bg-slate-800 rounded-2xl">
                        <div onClick={() => navigate(`/monster/${monster.id}`)} className="text-5xl p-4 m-4 bg-white rounded-4xl">{monster.speciesIcon}</div>

                        <span className="gap-4 space-x-2">
                            <button onClick={() => handleRemove(monster.id)} className="p-2 m-2 bg-orange-600">-</button>
                        </span>

                        <div onClick={() => navigate(`/monster/${monster.id}`)} className="text-2xl text-white font-bold">{monster.name}</div>
                    </motion.div>

                ))}
            </div>

            <button
                className="p-3 m-3 text-2xl text-white bg-slate-800 rounded-2xl"
                onClick={() => navigate(-1)}
            >
                Back
            </button>

            <div className="flex flex-row items-center justify-center gap-4 p-2 m-2 overflow-x-auto flex-shrink:0  w-full text-nowrap">
                {player.monsterBox.map(monster => (
                    <motion.div
                        key={monster.id}
                        className="flex flex-col items-center justify-center p-2 m-2 bg-slate-800 rounded-2xl">
                        <div onClick={() => navigate(`/monster/${monster.id}`)} className="text-5xl p-4 m-4 bg-white rounded-4xl">{monster.speciesIcon}</div>

                        <span className="gap-4 space-x-2">
                            <button onClick={() => handleAdd(monster.id)} className="p-2 m-2 bg-green-500">+</button>
                        </span>

                        <div className="text-2xl text-white font-bold">{monster.name}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );


}