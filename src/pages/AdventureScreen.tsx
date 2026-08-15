import { useNavigate } from "react-router-dom";
import { getPlayer } from "../store/GameStore";
import { useEffect, useState } from "react";
import { MonsterDatabase } from "../core/databases/MonsterDatabase";

export function AdventureScreen() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [isDisabled] = useState<boolean>(false);

    useEffect(() => {

        if (!player) {
            navigate("/");
        }

    }, [player, navigate]);

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white font-black p-2 m-2">Andventure Mode</h1>

            <span>
                <button
                    className="p-2 m-2 rounded-l-2xl bg-blue-500 hover:bg-blue-300 border-white border-4"
                    onClick={() => { alert("Search was clicked") }}
                >

                    Search

                </button>
                <button
                    className={`p-2 m-2 bg-lime-400 hover:bg-lime-200 border-white border-4`}
                    onClick={() => alert("Heal was clicked")}
                >
                    Heal Team
                </button>

                <button
                    disabled={isDisabled}
                    className={`p-2 m-2 rounded-r-2xl border-white border-4 ${isDisabled ? "bg-amber-900 hover:bg-amber-950" : "bg-amber-400 hover:bg-amber-200"}`}
                    onClick={() => { alert("Battle was clicked"), navigate("/battle-event") }}
                >
                    Battle
                </button>
            </span>

            <button
                className="text-white text-2xl p-2 m-2"
                onClick={() => navigate(-1)}
            >
                Back
            </button>

        </div>
    );
}