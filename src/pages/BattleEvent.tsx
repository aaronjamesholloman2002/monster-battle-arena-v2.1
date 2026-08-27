import { getPlayer } from "../store/GameStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { DemoStages } from "../core/models/DemoStages";
import { motion } from "framer-motion";
import type { BattleAction } from "../core/models/BattleAction";
import type { BattleMonster } from "../core/batttle/BattleMonster";
import { createBattleMonster } from "../core/managers/CreateBattleMonster";
import { createPhaserGame } from "../phaser/game/PhaserGame";
import { BattleEngine } from "../core/entities/BattleEngine";

const currentStage = DemoStages[4];
// const enemyMon = currentStage.enemies[0];

export default function BattleEvent() {

    const player = getPlayer();
    const navigate = useNavigate();
    const [screenState, setScreenState] = useState(0);
    const [turnNumber, setTurnNumber] = useState(0);
    const [battleTeam, setBattleTeam] = useState<BattleMonster[]>([]);
    const [battleEnemyTeam, setBattleEnemyTeam] = useState<BattleMonster[]>([]);
    const [selectedAttacker, setSelectedAttacker] = useState<BattleMonster | null>(null);
    const [selectedTarget, setSelectedTarget] = useState<BattleMonster | null>(null);
    const phaserContainerRef = useRef<HTMLDivElement | null>(null);
    const battleEngineRef = useRef<BattleEngine | null>(null);
    const [battleActions, setBattleActions] = useState<BattleAction[]>([]);
    // const battle = new BattleEngine(battleMon, enemyMon);

    useEffect(() => {

        if (!player) {
            navigate("/");
        }

        if (!phaserContainerRef.current) {
            return;
        }

        const game = createPhaserGame(
            phaserContainerRef.current
        );

        return () => {
            game.destroy(true);
        };

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

        console.log(`Attacker: ${monster.name}`)
    };

    const selectTarget = (target: BattleMonster) => {

        if (!selectedAttacker) {
            return;
        }

        setSelectedTarget(target);

        console.log(`Target: ${target.name}`)
    };

    const confirmAction = () => {

        if (!selectedAttacker || !selectedTarget) {
            return;
        }

        if (!selectedAttacker.move) {
            return;
        }

        const currentTarget = battleEnemyTeam.find(
            enemy => enemy.id === selectedTarget.id
        );

        if (!currentTarget) {
            return;
        }

        // Create the battle engine
        const engine = new BattleEngine(
            selectedAttacker,
            currentTarget,
            turnNumber
        );

        battleEngineRef.current = engine;

        // Enemy chooses its move
        if (!currentTarget.move) {
            return;
        }

        // Execute the entire turn
        const battleOver = engine.playTurn(
            selectedAttacker.move,
            currentTarget.move
        );

        // Get updated monsters
        const updatedPlayer = engine.getPlayer();
        const updatedEnemy = engine.getOpponent();

        console.log("Updated Player:", updatedPlayer);
        console.log("Updated Enemy:", updatedEnemy);

        // Update React state
        setBattleTeam(prev =>
            prev.map(monster =>
                monster.id === updatedPlayer.id
                    ? updatedPlayer
                    : monster
            )
        );

        setBattleEnemyTeam(prev =>
            prev.map(enemy =>
                enemy.id === updatedEnemy.id
                    ? updatedEnemy
                    : enemy
            )
        );

        // Print battle log
        console.log(engine.getLog());

        // Clear selections
        setSelectedAttacker(null);
        setSelectedTarget(null);

        if (battleOver) {

            if (updatedPlayer.currentHp <= 0) {
                console.log("PLAYER LOST");
            }

            if (updatedEnemy.currentHp <= 0) {
                console.log("ENEMY DEFEATED");
            }

            return;
        }

        console.log("TURN COMPLETE");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">

            {/* <img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/bulbasaur.png" alt="Bulbasaur" /> */}

            {screenState === 0 &&
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl text-white font-black">Battle Arena</h1>

                    <div className="p-2 m-2 flex flex-row items-center justify-center">{player.team.map(selectedAttacker =>
                        <div key={selectedAttacker.id} className="flex flex-col items-center justify-center bg-slate-700 p-3 m-3 rounded-2xl">
                            <p>{selectedAttacker.speciesIcon}</p>
                            <p className="text-white font-bold">{selectedAttacker.name}</p>
                        </div>
                    )}</div>
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
                    <div className="text-white text-5xl font-black">Monster's Turn</div>
                    <br />
                    <div className=" flex flex-row items-center justify-center gap-20">

                        <div>
                            {battleTeam.map(monster => (
                                <div
                                    onClick={() => selectAttacker(monster)}
                                    key={monster.id.toString()}
                                    className="flex flex-row items-center justify-center bg-slate-700 p-3 m-3 hover:bg-slate-500">
                                    <div className="text-6xl bg-white p-2 m-2">{monster.speciesIcon}</div>
                                    <div className="flex flex-col">
                                        <div>{monster.name}</div>
                                        <div>HP: {monster.currentHp}</div>
                                        <div>{monster.move?.name}: {monster.move.attackMultiplier}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            {battleEnemyTeam.map(enemy => (
                                <motion.div
                                    key={enemy.id}
                                    onClick={() => selectTarget(enemy)}
                                    className="flex flex-row items-center justify-center bg-slate-700 p-2 m-2 hover:bg-slate-500"
                                >
                                    <div className="bg-white text-5xl p-2 m-2">
                                        {enemy.speciesIcon}
                                    </div>

                                    <div className=" flex flex-col">
                                        <div>{enemy.name}</div>

                                        <div>
                                            HP: {enemy.currentHp}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

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
                        className={`p-2 m-2 bg-amber-500 hover:bg-amber-400 transition disabled:bg-amber-600 disabled:hover:bg-amber-700`}
                    >
                        {selectedAttacker && selectedTarget ? 'Confirm Attack' : 'Processing...'}
                    </button>

                    <div className="text-white m-4">

                        <h2 className="text-2xl font-bold">
                            Attack Order
                        </h2>

                        {battleActions.map(action => (
                            <div
                                key={action.order}
                                className="p-2"
                            >
                                {action.order}.
                                {" "}
                                {action.attacker.name}
                                {" → "}
                                {action.target.name}
                            </div>
                        ))}

                    </div>
                    <button className="text-2xl text-white" onClick={() => navigate(-1)}>Back</button>
                </div>}

            {/* <div
                ref={phaserContainerRef}
                className="w-full h-full flex flex-col items-center justify-center"
            /> */}
        </div>
    );
}