import { useNavigate } from "react-router-dom";
import { getPlayer } from "../store/GameStore";

export function TeamView() {

    const player = getPlayer();
    const navigate = useNavigate();

    if (!player) {
        return <p>No player loaded.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
            <h1 className="p-1 text-6xl font-black">{player.name}'s Team</h1>

            {player.team.map(monster => (
                <p key={monster.id} className="text-white">
                    {monster.name}
                </p>
            ))}

            <button
                className="p-2 m-2 text-2xl text-white"
                onClick={() => navigate(-1)}
            >
                Back
            </button>
        </div>
    );
}