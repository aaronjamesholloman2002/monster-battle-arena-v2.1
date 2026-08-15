
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../core/enums/MenuState";
import type { Player } from "../core/entities/Player";
import { Gender } from "../core/enums/Gender";
import type { Monster } from "../core/entities/Monster";
import { v4 as uuidv4 } from 'uuid'
import { getPlayer } from "../store/GameStore";
import { useEffect } from "react";

interface Props {

    changeScreen: (menuState: MenuState) => void;
}

export function MainMenu({ changeScreen }: Props) {

    const player = getPlayer();
    const navigate = useNavigate();

    useEffect(() => {

        if (!player) {
            navigate("/");
        }

    }, [player, navigate]);

    if (!player) {
        return <p>Loading player...</p>;
    }

    return (

        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center" >

            <h1 className="text-6xl font-bold text-green-400 mb-10">

                Project Dragon Claw

            </h1>

            {/* <Card title="Player" children imageAlt="" content={""} isHoverable /> */}

            <div className="flex flex-col items-center justify-center bg-gray-600 p-3 m-3 border-4 border-gray-800 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">

                <div>Id: {player.id}</div>
                <div>Name: {player.name}</div>
                <div>Gender: {player.gender}</div>
            </div>

            {/* <button
                className="w-64 py-4 m-4 bg-orange-600 rounded-xl mb-4 hover:bg-orange-500 ui-hoverable"
                onClick={() => {
                    changeScreen(MenuState.ADVENTURE);
                    navigate("/adventure-mode");
                }}
            >
                Adventrue Mode
            </button> */}
            <button
                className="w-64 py-4 m-4 bg-orange-600 rounded-xl mb-4 hover:bg-orange-500 ui-hoverable"
                onClick={() => {
                    changeScreen(MenuState.BATTLE)
                    navigate("/battle-event");
                }}
            >
                Battle Mode
            </button>

            <button
                className="w-64 py-4 bg-green-600 rounded-xl mb-4 hover:bg-green-500 ui-hoverable"
                onClick={() => {
                    changeScreen(MenuState.SUMMON);
                    navigate("/summon-event");
                }}
            >
                Summon Event
            </button>

            <button
                className="w-64 py-4 bg-blue-600 rounded-xl mb-4 hover:bg-blue-500 ui-hoverable"
                onClick={() => {
                    changeScreen(MenuState.TEAM);
                    navigate("/team-view");
                }
                }
            >
                Team View
            </button>

            <button
                className="w-64 py-4 bg-purple-600 rounded-xl mb-4 hover:bg-purple-500 ui-hoverable ease-linear"
                onClick={() => {
                    changeScreen(MenuState.INVENTORY)
                    navigate("/inventory-search")
                }}
            >
                Search Inventory
            </button>

            <button
                className="w-64 py-4 bg-gray-600 rounded-xl mb-4 hover:bg-gray-500 ui-hoverable items-center justify-center"
                onClick={() => {
                    changeScreen(MenuState.SETTINGS)
                    navigate("/settings")
                }}
            >
                Settings
            </button>

        </div>

    );

}