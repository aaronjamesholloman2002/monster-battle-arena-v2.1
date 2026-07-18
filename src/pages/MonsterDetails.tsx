import { useState } from "react";
import type { Monster } from "../core/entities/Monster";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPlayer } from "../store/GameStore";

interface MonsterDetailsProps {

    monsters: Monster[];
}

export default function MonsterDetails({ monsters }: MonsterDetailsProps) {

    // const [activeMonster, setActiveMonster] = useState<Monster | null>(null);
    const { id } = useParams<{ id: string }>();
    const player = getPlayer();
    const navigate = useNavigate();
    const selectedMonster = player.team.find(
        monster => monster.id === id
    );

    if (!selectedMonster || !player) {
        navigate("/");
        // return (
        //     <div className="mt-6 p-6 bg-slate-800 rounded-xl text-slate-400 w-96 text-center">
        //         <p className="italic mb-4">Monster not found.</p>
        //         <Link to="/team-view" className="text-blue-400 hover:underline">
        //             Back to List
        //         </Link>
        //     </div>
        // );
    }

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <div className="mt-6 p-6 bg-slate-800 rounded-xl text-white w-96">

                <h2 className="text-3xl font-bold">
                    {selectedMonster.name}
                </h2>

                <br />

                <p>Creature: {selectedMonster.creature}</p>
                <p>Type: {selectedMonster.type}</p>
                <p>HP: {selectedMonster.hp}</p>
                <p>Attack: {selectedMonster.attack}</p>
                <p>Defense: {selectedMonster.defense}</p>
                <p>Speed: {selectedMonster.speed}</p>

                <h3 className="mt-4 font-bold">
                    Passives
                </h3>

                {selectedMonster.passives.map(passive => (
                    <p key={passive.name}>
                        {passive.name}
                        {passive.effect}
                        {passive.trigger}
                    </p>
                ))}

            </div>

            <button
                className="text-white text-2xl"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
}