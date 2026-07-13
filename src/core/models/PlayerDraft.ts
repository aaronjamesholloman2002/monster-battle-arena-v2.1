import type { Monster } from "../entities/Monster";
import type { Gender } from "../enums/Gender";

export interface PlayerDraft {

    name: string;
  
    gender?: Gender;
  
    starter?: Monster;
  
  }