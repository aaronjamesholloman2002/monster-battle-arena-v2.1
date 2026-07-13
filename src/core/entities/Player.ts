import type { Gender } from "../enums/Gender";
import type { Item } from "./Item";
import type { Monster } from "./Monster";
import type { Weapon } from "./Weapon";

export interface Player{
    id: string;
    name: string;
    gender?: Gender;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    team: Monster[];
    monsterBox: Monster[];
    weapons: Weapon[];
    items: Item[];
  }