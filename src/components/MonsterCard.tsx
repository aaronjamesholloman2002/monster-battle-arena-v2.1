import { DividerHorizontalIcon } from "@radix-ui/react-icons";
import type { Monster } from "../core/entities/Monster";
import React from "react";

interface MonsterCardProps {
    monster: Monster;
}

export function MonsterCard({ monster }: MonsterCardProps) {
    return (
        <div className="bg-slate-800 rounded-xl p-4 text-white">
            <h2>{monster.name}</h2>

            <p>{monster.type}</p>

            <p>HP: {monster.hp}</p>

            <p>ATK: {monster.attack}</p>

            <p>DEF: {monster.defense}</p>

            <p>SPD: {monster.speed}</p>
        </div>
    );
}