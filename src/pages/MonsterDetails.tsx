import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPlayer } from "../store/GameStore";

export default function MonsterDetails() {

    const { id } = useParams<{ id: string }>();

    const player = getPlayer();

    const navigate = useNavigate();

    const selectedMonster = [...(player?.team ?? []), ...(player?.monsterBox ?? [])].find(
        monster => monster.id === id
    );

    useEffect(() => {

        if (!player || !selectedMonster) {
            navigate("/");
        }

    }, [player, selectedMonster, navigate]);


    if (!player || !selectedMonster) {
        return <p className="text-white">Loading monster...</p>;
    }


    return (

        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">

            <div className="mt-6 p-6 bg-slate-800 rounded-xl text-white w-96">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl">
                        {selectedMonster.speciesID}
                    </h1>

                    <br />

                    <h2 className="text-3xl font-bold">
                        {selectedMonster.name}
                    </h2>
                </div>


                <br />

                <p>
                    Creature: {selectedMonster.creature}
                </p>

                <p>
                    Type: {selectedMonster.type}
                </p>

                <p>
                    HP: {selectedMonster.hp}
                </p>

                <p>
                    Attack: {selectedMonster.attack}
                </p>

                <p>
                    Defense: {selectedMonster.defense}
                </p>

                <p>
                    Speed: {selectedMonster.speed}
                </p>

                <h3 className="mt-4 font-bold">
                    Passives
                </h3>

                {selectedMonster.passives.map(passive => (

                    <div key={passive.name}>

                        <p>
                            Name: {passive.name}
                        </p>

                        <p>
                            Effect: {passive.effect}
                        </p>

                    </div>

                ))}

            </div>


            <button
                className="text-white text-2xl mt-4"
                onClick={() => navigate(-1)}
            >
                Back
            </button>

        </div>

    );

}