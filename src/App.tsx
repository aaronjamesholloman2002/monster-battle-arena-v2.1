import './App.css'
import { Routes, Route } from "react-router-dom";

import { MainMenu } from "./pages/MainMenu";
import type { MenuState } from './core/enums/MenuState';

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<MainMenu changeScreen={function (menuState: MenuState): void {
        throw new Error('Function not implemented.');
      }} />} />

      <Route path=""></Route>

    </Routes>
  );
}