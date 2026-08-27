import { useNavigate } from "react-router-dom";
import { MenuState } from "../core/enums/MenuState";

interface Props {

    changeScreen: (menuState: MenuState) => void;

}

export function TitleScreen({ changeScreen }: Props) {

    const navigate = useNavigate();

    return (

        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center" >

            <h1 className="text-6xl font-bold text-green-400 mb-10">

                Project Dragon Fang

            </h1>

            <button
                className="w-64 py-4 bg-green-600 rounded-xl mb-4 hover:bg-green-500 ui-hoverable"
                // onClick={() => changeScreen(MenuState.NEW_GAME)}
                onClick={() => {
                    changeScreen(MenuState.NEW_GAME);
                    navigate("/new-game");
                }}
            >
                New Game
            </button>

            {/* <button
                className="w-64 py-4 bg-blue-600 rounded-xl mb-4 hover:bg-blue-500 ui-hoverable"
                onClick={() => changeScreen(MenuState.CONTINUE)}
            >
                Continue
            </button> */}

            {/* <button
                className="w-64 py-4 bg-gray-600 rounded-xl mb-4 hover:bg-gray-500 ui-hoverable"
                onClick={() => changeScreen(MenuState.SETTINGS)}
            >
                Settings
            </button> */}

            {/* <FontAwesomeIcon icon={byPrefixAndName.faslr['angle-left']} /> */}

        </div>

    );

}