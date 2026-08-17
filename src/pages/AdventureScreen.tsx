import { useNavigate } from "react-router-dom";
import { getPlayer } from "../store/GameStore";
import { useEffect, useState } from "react";
import { MonsterDatabase } from "../core/databases/MonsterDatabase";
import { PathSystem, rollPathwayEvent, type PathwayChoice, type PathwayNode } from "../systems/PathSystem";
import { Outcome } from "../core/enums/Outcome";

export function AdventureScreen() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [isDisabled] = useState<boolean>(false);
    const [currentNode, setCurrentNode] = useState<PathwayNode | null>(null);
    const [outcome, setOutcome] = useState<Outcome | null>(null);

    useEffect(() => {

        if (!player) {
            navigate("/");
        }

        const node = PathSystem.generateNode();

        setCurrentNode(node);

    }, [player, navigate]);

    const resolveOutcome = (outcome: Outcome) => {

        switch (outcome) {

            case Outcome.ITEM_APPEAR:
                // Generate item
                break;

            case Outcome.STATUS_EFFECT:
                // Select random monster
                // Apply status
                break;

            case Outcome.STAT_REDUCTION:
                // Select random monster
                // Select random stat
                // Reduce stat
                break;

            case Outcome.ENEMY_APPEAR:
                // Start battle
                break;
        }
    };

    const handlePathChoice = (path: PathwayChoice) => {

        console.log("Player selected:", path.label);

        const result = rollPathwayEvent();

        setOutcome(result);

        resolveOutcome(result);

        console.log("Pathway outcome:", result);
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white font-black p-2 m-2">Andventure Mode</h1>

            {currentNode && (
                <div>
                    <button
                        className="bg-red-500 p-2 m-2 rounded-4xl text-white"
                        onClick={() => handlePathChoice(currentNode.leftPath)}
                    >
                        {"<-- " + currentNode.leftPath.label}
                    </button>

                    <button
                        className="bg-blue-500 p-2 m-2 rounded-4xl text-white"
                        onClick={() => handlePathChoice(currentNode.rightPath)}
                    >
                        {currentNode.rightPath.label + " -->"}
                    </button>
                </div>
            )}

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