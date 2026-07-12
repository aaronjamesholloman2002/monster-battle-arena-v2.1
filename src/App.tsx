import './App.css'
import { Routes, Route } from "react-router-dom";

import { MainMenu } from "./pages/MainMenu";
import type { MenuState } from './core/enums/MenuState';
import NewGame from './pages/NewGame';


export default function App() {
  const changeScreen = (menuState: MenuState) => {

    alert(menuState);

  };

  return (
    <Routes>

      <Route path="/" element={<MainMenu changeScreen={changeScreen} />} />

      <Route path="/new-game" element={< NewGame />} />

    </Routes>
  );
}