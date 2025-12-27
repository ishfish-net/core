import { Moon, Sun } from "lucide-react";
import logo from "../assets/logo.svg";
import "./Header.css";

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  mePanelOpen: boolean;
  onToggleMePanel: () => void;
  onNavigateToGames: () => void;
}

export default function Header({
  darkMode,
  onToggleTheme,
  mePanelOpen,
  onToggleMePanel,
  onNavigateToGames,
}: HeaderProps) {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          <button
            className={`me-btn${mePanelOpen ? " open" : ""}`}
            onClick={onToggleMePanel}
            aria-label="Toggle me menu"
          >
            Me
          </button>
          <button className="games-btn" onClick={onNavigateToGames}>
            Games
          </button>
        </div>

        <div className="logo">
          <img src={logo} alt="ishfish logo" className="logo-img" />
        </div>

        <div className="nav-right">
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
