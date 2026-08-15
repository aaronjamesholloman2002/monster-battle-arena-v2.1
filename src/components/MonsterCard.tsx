import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import type { Monster } from "../core/entities/Monster";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { TeamBuilder } from "../core/managers/TeamBuilder";
import { getPlayer, setPlayer as savePlayer } from "../store/GameStore";
import { motion } from "framer-motion";

interface MonsterCardProps {
    monster: Monster;
}

export function MonsterCard({ monster }) {

    const [player, setCurrentPlayer] = useState(() => getPlayer());
    const navigate = useNavigate();

    // return (
    //     <div className="bg-slate-800 rounded-xl text-white p-25 m-5">
    //         <div className="flex flex-row items-end justify-end">
    //             <h1 className="text-6xl">{monster.speciesIcon}</h1>

    //             <h2 className="text-2xl">{monster.name}</h2>
    //         </div>

    //         <br />

    //         <p>Type: {monster.type}</p>

    //         <p>HP: {monster.hp}</p>

    //         <p>ATK: {monster.attack}</p>

    //         <p>DEF: {monster.defense}</p>

    //         <p>SPD: {monster.speed}</p>
    //     </div>
    // );
}