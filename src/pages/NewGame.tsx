import React, { useState } from "react";
import '../App.css';
import type { Player } from "../core/entities/Player";
import { Gender } from "../core/enums/Gender";
import { MenuState } from "../core/enums/MenuState";
import type { Monster } from "../core/entities/Monster";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";

// interface PlayerDraft {

//     name: string;

//     gender?: Gender;

//     starter?: Monster;

//     monsters?: Monster[];

// }

// const draft: PlayerDraft = {

//     name: ""

// };


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

    const [team, setTeam] = useState<Monster>();


    const [step, setStep] = useState(0);

    const navigate = useNavigate();

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

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">

            {step === 0 && (

                <>
                    <h1 className="text-4xl font-black text-white">Enter your name</h1>

                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-2 m-2"
                    />

                    <button
                        onClick={handleContinue}
                        className="bg-blue-400 p-2 m-2 rounded-xl text-white">

                        Continue
                    </button>
                </>

            )}

            {step === 1 && (

                <>
                    <h1 className="text-white">Select your gender {player.name}</h1>

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
                    <h1>Choose your Ally...</h1>

                    <Card title={"Creature Card"} content={""} />

                    <button
                        onClick={() => {

                            setPlayer(prev => ({
                                ...prev,
                                gender: Gender.FEMALE
                            }));

                            navigate("/main-menu")

                        }}
                    >
                        🐜
                    </button>
                </>

            )}

        </div>
    );

    const displayPlayer = () => {

    }
}
