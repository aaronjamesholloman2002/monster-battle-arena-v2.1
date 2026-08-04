import { useNavigate } from "react-router-dom";
import type { Monster } from "../core/entities/Monster";
import type { Player } from "../core/entities/Player";
import { getPlayer, setPlayer } from "../store/GameStore";
import { summonMonster } from "../systems/GachaSystem";
import { useEffect, useState } from "react";
import type { SummonBanner } from "../core/entities/SummonBanner";
import { DualDragonFestival, LaunchFestival, StarterBanner } from "../core/databases/BannerDatabase";

export interface SummoningPlayer {

    summonerId: string;

    SummoningPoints: number;

    Stamina: number;
}

export default function SummonEvent() {

    const navigate = useNavigate();
    const player = getPlayer();
    const [summonedMonster, setSummonedMonster] = useState<Monster | null>(null);
    const [starterBanner, setStarterBanner] = useState<SummonBanner>(LaunchFestival);
    const [festivalBanner, setFestivalBanner] = useState<SummonBanner>(DualDragonFestival);

    useEffect(() => {

        if (!player) {
            navigate("/");
        }

    }, [player, navigate]);

    if (!player) {
        return <p>Loading player...</p>;
    }

    const handleSummon = () => {

        const monster = summonMonster(starterBanner);

        const updatedPlayer = addMonsterToBox(
            player,
            monster
        );

        setSummonedMonster(monster);
        setPlayer(updatedPlayer);

        console.log(
            `You summoned ${monster.name}!`
        );
    };

    return (<div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-white">Summoning Event</h1>

        <h1 className="p-2 m-2 text-3xl text-white">Summoning Banner</h1>
        <div className="text-6xl"> {starterBanner.speciesIDs} </div>

        {summonedMonster && (

            <div className="mt-8 w-80 p-6 bg-slate-800 rounded-xl shadow-lg text-center">

                <p className="text-lg text-lime-400">
                    You obtained a new creature!!
                </p>

                <div className="mt-6 p-8 bg-slate-700 rounded-lg">

                    <p className="text-6xl">
                        {summonedMonster.speciesID}
                    </p>

                    <p className="mt-4 text-2xl font-bold">
                        {summonedMonster.name}
                    </p>

                </div>

                <p className="mt-4 text-gray-300">
                    Rarity: {summonedMonster.rarity}
                </p>

                <p className="mt-2 text-gray-300">
                    Type: {summonedMonster.type}
                </p>

            </div>

        )}

        <button
            onClick={handleSummon}
            className="p-4 m-4 text-xl text-white bg-emerald-300"
        >
            Summon Monster
        </button>

        <button
            className="p-2 m-2 text-2xl text-white"
            onClick={() => navigate(-1)}
        >
            Back
        </button>
    </div>
    );
}

function addMonsterToBox(
    player: Player,
    summonedMonster: Monster
): Player {

    return {
        ...player,

        monsterBox: [
            ...player.monsterBox,
            summonedMonster
        ]
    };
}
