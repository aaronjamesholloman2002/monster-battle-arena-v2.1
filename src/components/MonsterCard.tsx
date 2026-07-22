import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import type { Monster } from "../core/entities/Monster";
import React from "react";

interface MonsterCardProps {
    monster: Monster;
}

export function MonsterCard({ monster }: MonsterCardProps) {
    return (
        <div className="bg-slate-800 rounded-xl text-white p-20 m-5">
            <h1 className="text-6xl">{monster.speciesID}</h1>

            <h2 className="text-2xl">{monster.name}</h2>

            <br />

            <p>Type: {monster.type}</p>

            <p>HP: {monster.hp}</p>

            <p>ATK: {monster.attack}</p>

            <p>DEF: {monster.defense}</p>

            <p>SPD: {monster.speed}</p>
        </div>
    );
}