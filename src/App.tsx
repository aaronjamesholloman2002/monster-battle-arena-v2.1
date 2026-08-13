import './App.css'
import { Routes, Route } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import type { MenuState } from './core/enums/MenuState';
import NewGame from './pages/NewGame';
import { TitleScreen } from './pages/TitleScreen';
import { AdventureScreen } from './pages/AdventureScreen';
import { TeamView } from './pages/TeamView';
import { InventorySearch } from './pages/InventorySearch';
import { Settings } from './pages/Settings';
import SummonEvent from './pages/SummonEvents';
import MonsterDetails from './pages/MonsterDetails';
import BattleEvent from './pages/BattleEvent';

export default function App() {

  const changeScreen = (menuState: MenuState) => {

    alert("You are being sent to " + menuState + " Screen");
  };
  // const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true';

  // if (isDemoMode) { return (); }

  return (
    <Routes>

      <Route path="/" element={<TitleScreen changeScreen={changeScreen} />} />
      <Route path="/new-game" element={< NewGame />} />
      <Route path="/main-menu" element={< MainMenu changeScreen={changeScreen} />} />
      <Route path="/adventure-mode" element={<AdventureScreen />} />
      <Route path="/battle-event" element={<BattleEvent />} />
      <Route path="/team-view" element={< TeamView />} />
      <Route path="/monster/:id" element={<MonsterDetails />} />
      <Route path="/inventory-search" element={< InventorySearch />} />
      <Route path="/summon-event" element={< SummonEvent />} />
      <Route path="/settings" element={< Settings />} />

    </Routes>
  );
}