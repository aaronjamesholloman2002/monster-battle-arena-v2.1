import React, { useEffect, useRef, useState } from "react";
import '../App.css';
import type { Player } from "../core/entities/Player";
import { Gender } from "../core/enums/Gender";
import { MenuState } from "../core/enums/MenuState";
import type { Monster } from "../core/entities/Monster";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
import { MonsterDatabase } from "../core/databases/MonsterDatabase";
import { MonsterFactory } from "../core/managers/MonsterFactory";
import { setPlayer as savePlayer } from "../store/GameStore";

export default function NewGame() {

    const [inputValue, setInputValue] = useState<string>("");
    const [player, setPlayer] = useState<Player>({
        id: "p1",
        name: "Guest",
        gender: Gender.MALE,
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        team: [],
        monsterBox: [],
        weapons: [],
        items: [],
    });

    // const [team, setTeam] = useState<Monster>();

    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    // const buttonRef = useRef<HTMLButtonElement | null>(null);

    // const button = buttonRef.current;

    // 4. Handle form submission to update the player's name
    const handleContinue = () => {

        if (inputValue.trim() === "") return;

        setPlayer(prev => ({
            ...prev,
            name: inputValue
        }));

        setInputValue("");

        setStep(1);

    };



    function chooseStarter(monsterID: string) {

        const starter = MonsterFactory.create(monsterID);

        const updatedPlayer = {
            ...player,
            team: [...player.team, starter],
            // monsterBox: [...player.monsterBox, starter],
        };

        setPlayer(updatedPlayer);

        savePlayer(updatedPlayer);
    }

    // useEffect(() => {
    //     const button = buttonRef.current;
    //     if (!button) return;

    //     button.addEventListener('click', handleContinue);

    //     button.addEventListener("keydown", (event: KeyboardEvent): void => {
    //         if (event.key === "Enter") {
    //             event.preventDefault();

    //             handleContinue();
    //         }
    //     })

    //     return () => {
    //         button.removeEventListener('click', handleContinue);
    //     };
    // });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">

            {step === 0 && (

                <>
                    <h1 className="text-4xl font-black text-white">Enter your name</h1>

                    <br />

                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { handleContinue() } }}
                        className="p-2 m-2 text-white"
                    />

                    <button
                        id="continueButton"
                        type="submit"
                        onClick={handleContinue}
                        className="p-2 m-2 text-white bg-blue-400 rounded-xl">

                        Continue
                    </button>
                </>

            )}

            {step === 1 && (

                <>
                    <h1 className="text-white">Select your gender {player.name}</h1>

                    <br />

                    <button
                        onClick={() => {

                            setPlayer(prev => ({
                                ...prev,
                                gender: Gender.MALE
                            }));

                            setStep(2);


                        }}
                        className="text-white"
                    >
                        Male
                    </button>

                    <button
                        onClick={() => {

                            setPlayer(prev => ({
                                ...prev,
                                gender: Gender.FEMALE
                            }));

                            setStep(2);

                        }}
                        className="text-white"
                    >
                        Female
                    </button>

                </>

            )}
            {step === 2 && (

                <>
                    <h1 className="text-white">Choose your Ally...</h1>

                    <br />

                    <div className="flex flex-col space-y-2">
                        <button
                            className="text-black bg-slate-700 rounded-2xl p-2 m-2"
                            onClick={() => {
                                chooseStarter("0001")
                                navigate("/main-menu")
                            }}

                        >
                            <div>🐒</div>
                            <p>Rimeape</p>
                        </button>
                        <button
                            className="text-black bg-slate-700 rounded-2xl p-2 m-2"
                            onClick={() => {
                                chooseStarter("0002")
                                navigate("/main-menu")
                            }}
                        >
                            <div>🐼</div>
                            <p>Bambeast</p>
                        </button>
                        <button
                            className="text-black bg-slate-700 rounded-2xl p-2 m-2"
                            onClick={() => {
                                chooseStarter("0003")
                                navigate("/main-menu")
                            }}

                        >
                            <div>🕊️</div>
                            <p>Whifdraft</p>
                        </button>
                    </div>

                    {/* {player?.team.map(monster => (

                        <p key={monster.id} className="text-white">
                            {monster.name}
                        </p>

                    ))} */}
                </>

            )}

        </div>
    );

    // const displayPlayer = () => {

    // }
}
