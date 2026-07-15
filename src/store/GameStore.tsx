import type { Player } from "../core/entities/Player";

let currentPlayer: Player | null = null;

export function setPlayer(player: Player) {
    currentPlayer = player;
}

export function getPlayer() {
    return currentPlayer;
}