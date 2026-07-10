import { MenuState } from "../core/enums/MenuState";

interface Props {

    changeScreen: (menuState: MenuState) => void;

}

export function MainMenu({ changeScreen }: Props) {

    return (

        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">

            <h1 className="text-6xl font-bold text-green-400 mb-10">

                Dragon Claw

            </h1>

            <button
                className="w-64 py-4 bg-green-600 rounded-xl mb-4 hover:bg-green-500"
                onClick={() => changeScreen(MenuState.MAIN_MENU)}
            >
                New Game
            </button>

            <button
                className="w-64 py-4 bg-blue-600 rounded-xl mb-4 hover:bg-blue-500"
                onClick={() => changeScreen(MenuState.CONTINUE)}
            >
                Continue
            </button>

            <button
                className="w-64 py-4 bg-purple-600 rounded-xl mb-4 hover:bg-purple-500"
                onClick={() => changeScreen(MenuState.SETTINGS)}
            >
                Settings
            </button>

        </div>

    );

}