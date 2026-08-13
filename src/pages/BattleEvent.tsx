import type { Monster } from "../core/entities/Monster";
import { getPlayer } from "../store/GameStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BattleSystem } from "../systems/BatlteSystem";
import { DemoStages } from "../core/models/DemoStages";
import { motion } from "framer-motion";
import type { BattleState } from "../core/batttle/BattleState";
import type { BattleAction } from "../core/managers/BattleAction";
import type { BattleMonster } from "../core/batttle/BattleMonster";
import { createBattleMonster } from "../core/managers/CreateBattleMonster";

const currentStage = DemoStages[4];
const enemy = currentStage.enemies[0];

export default function BattleEvent() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [screenState, setScreenState] = useState(0);
    const [battleTeam, setBattleTeam] = useState<BattleMonster[]>([]);
    const [battleEnemyTeam, setBattleEnemyTeam] = useState<BattleMonster[]>([]);
    const [selectedAttacker, setSelectedAttacker] = useState<BattleMonster | null>(null);
    const [selectedTarget, setSelectedTarget] = useState<BattleMonster | null>(null);
    const [battleActions, setBattleActions] = useState<BattleAction[]>([]);
    // const [battle, setBattle] = useState<BattleState>();

    useEffect(() => {

        if (!player) {
            navigate("/");
        }
        setBattleTeam(player.team.map((monster) => createBattleMonster(monster)));
    }, [player, navigate])

    const startBattle = () => {

        setBattleEnemyTeam(
            currentStage.enemies.map(monsrer =>
                createBattleMonster(monsrer)
            ));

        setBattleTeam(
            player.team.map(monster => createBattleMonster(monster))
        );

        setScreenState(1);
    };

    const selectAttacker = (monster: BattleMonster) => {

        if (!monster.move) return;

        setSelectedAttacker(monster);
    };

    const selectTarget = (target: BattleMonster) => {

        if (!selectedAttacker) {
            return;
        }

        setSelectedTarget(target);
    };

    const confirmAction = () => {

        if (!selectedAttacker || !selectedTarget) {
            return;
        }

        if (!selectedAttacker.move) {
            return;
        }

        const action: BattleAction = {
            attacker: selectedAttacker,
            target: selectedTarget,
            move: selectedAttacker.move,
            order: battleActions.length + 1
        };

        setBattleActions(prev => [
            ...prev,
            action
        ]);

        setSelectedAttacker(null);
        setSelectedTarget(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">

            {screenState === 0 &&
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl text-white font-black">Battle Arena</h1>

                    <button
                        onClick={() => {
                            startBattle()
                        }}
                        className="p-2 m-2 text-white bg-blue-300 rounded"
                    >Start Battle</button>

                    <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
                </div>
            },

            {screenState === 1 &&
                <div className="flex flex-col items-center justify-center">
                    <div className="text-white text-5xl font-black">{ }Monster's Turn</div>
                    <br />
                    <div className=" flex flex-row items-center justify-center gap-20">

                        {battleTeam.map(monster => (
                            <div
                                onClick={() => selectAttacker(monster)}
                                key={monster.id.toString()}
                                className="flex flex-col items-center justify-center bg-slate-700 p-2 m-2 hover:bg-slate-500">
                                <p className="text-6xl bg-white p-2 m-2">{monster.speciesIcon}</p>
                                <p>{monster.name}</p>
                                <p>HP: {monster.currentHP}</p>
                                <div>
                                    {monster.move?.name}: {monster.move.attackMultiplier}
                                </div>
                            </div>
                        ))}

                        {battleEnemyTeam.map(enemy => (
                            <motion.div
                                key={enemy.id}
                                onClick={() => selectTarget(enemy)}
                                className="flex flex-col items-center justify-center bg-slate-700 p-2 m-2 hover:bg-slate-500"
                            >
                                <div className="bg-white text-5xl p-2 m-2">
                                    {enemy.speciesIcon}
                                </div>

                                <div>{enemy.name}</div>

                                <div>
                                    HP: {enemy.currentHP}
                                </div>
                            </motion.div>
                        ))}

                        {/* <motion.div
                            onClick={() => {
                                if (!selectedAttacker) return;

                                const action: BattleAction = {
                                    attacker: selectedAttacker,
                                    target: battleEnemyTeam[0],
                                    move: selectedAttacker.move!,
                                    order: battleActions.length + 1
                                };

                                setBattleActions(prev => [
                                    ...prev,
                                    action
                                ]);

                                setSelectedAttacker(null);
                            }}
                            className="flex flex-col items-center justify-center bg-slate-700 p-2 m-2">
                            <div className="bg-white text-5xl p-2 m-2">{battleEnemy.speciesIcon}</div>
                            <div>{battleEnemy.name}</div>
                            <motion.div>{battleEnemy.hp}</motion.div>
                        </motion.div> */}

                        {/* <div className="text-white">
                            <h2>Attack Order</h2>

                            {battleActions.map(action => (
                                <div key={action.order}>
                                    {action.order}. {action.attacker.name}
                                    {" → "}
                                    {action.target.name}
                                </div>
                            ))}
                        </div> */}
                    </div>

                    <button
                        onClick={confirmAction}
                        disabled={!selectedAttacker || !selectedTarget}
                        className="p-2 m-2 bg-amber-600"
                    >
                        Confirm Attack
                    </button>
                    <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
                </div>}
        </div>
    );
}