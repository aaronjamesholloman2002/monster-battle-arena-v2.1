
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { MenuState } from "../core/enums/MenuState";
import type { Player } from "../core/entities/Player";
import { Gender } from "../core/enums/Gender";
import type { Monster } from "../core/entities/Monster";

interface Props {

    changeScreen: (menuState: MenuState) => void;

}

export const player: Player = {
    id: crypto.randomUUID(),
    name: "James",
    gender: null,
    hp: 100,
    attack: 50,
    defense: 60,
    speed: 40,
    team: [],
    monsterBox: [],
    weapons: [],
    items: []
}

export function MainMenu({ changeScreen }: Props) {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center" >

            <h1 className="text-6xl font-bold text-green-400 mb-10">

                Project Dragon Claw

            </h1>

            <Card title="Player" children imageAlt="" content={""} isHoverable />

            <button
                className="w-64 py-4 m-4 bg-green-600 rounded-xl mb-4 hover:bg-green-500 ui-hoverable"
                // onClick={() => changeScreen(MenuState.NEW_GAME)}
                onClick={() => {
                    changeScreen(MenuState.ADVENTURE);
                    navigate("/adventure-mode");
                }}
            >
                Adventrue Mode
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
                className="w-64 py-4 bg-gray-600 rounded-xl mb-4 hover:bg-gray-500 ui-hoverable"
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