import type { Type } from "./Type";

export type Status =
  | "Burn"
  | "Poison"
  | "Shock"
  | "Freeze"
  | "AtkUp"
  | "DefUp"
  | "SpdUp";

  export interface StatusEffect {
    status: Status;
    type?: Type;
    effect: string;
    turns: number;
    damage?: number;
  }