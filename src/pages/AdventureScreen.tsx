import { useNavigate } from "react-router-dom";

export function AdventureScreen() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white font-black p-2 m-2">Andventure Mode</h1>

            <span>
                <button
                    className="p-2 m-2 bg-blue-600"
                    onClick={() => alert("Search was clicked")}
                >

                    Search

                </button>
                <button
                    className="p-2 m-2 bg-lime-300"
                    onClick={() => alert("Heal was clicked")}
                >
                    Heal Team
                </button>

                <button
                    className="p-2 m-2 bg-amber-600"
                    onClick={() => alert("Battle was clicked")}
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