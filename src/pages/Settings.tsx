import { useNavigate } from "react-router-dom";

export function Settings() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
            <h1 className="text-6xl text-white font-black">Settings</h1>

            <h2 className="text-white text-2xl p-2 m-2">Coming Soon...</h2>

            <button
                className="text-white text-2xl p-2 m-2"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
}