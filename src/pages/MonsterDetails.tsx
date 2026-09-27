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

        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">

            <div className="p-6 mt-6 text-white bg-slate-800 rounded-xl w-96">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="p-2 m-2 text-6xl bg-white rounded-2xl">
                        {selectedMonster.speciesIcon}
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

                <p>
                    Move(s): {selectedMonster.move.name}
                </p>

                <h3 className="mt-4 font-bold">
                    Passives
                </h3>

                <div>{selectedMonster.passives.map(passive => (
                    <p>{passive.toString()}</p>
                ))}</div>

                {/* {selectedMonster.passives.map(passive => (

                    <div key={passive.getName()}>

                        <div>
                            {passive.toString()}

                            {passive.getEffect().map((passiveEffect, index) =>
                                <div key={passiveEffect.id || index}>
                                    {passiveEffect.buffType}
                                </div>
                            )}

                        </div>

                    </div>

                ))} */}

            </div>


            <button
                className="mt-4 text-2xl text-white"
                onClick={() => navigate(-1)}
            >
                Back
            </button>

        </div>

    );

}