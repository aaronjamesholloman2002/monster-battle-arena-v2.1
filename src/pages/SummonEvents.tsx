import type { Player } from "../core/entities/Player";
import { player } from "./MainMenu";

export interface SummoningPlayer {

    summonerId: string;

    SummoningPoints: number;

    Stamina: number;
}

// if (!player) {
//     navigate("/");
// }

export default function SummonEvent() {

    return (<div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white">Summoning Event</h1>

        <h1 className="text-xl text-white">Summon Banners</h1>
    </div>
    );
}