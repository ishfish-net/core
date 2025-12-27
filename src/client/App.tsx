import { useEffect, useState } from "react";
import Header from "./components/Header";
import SidePanel from "./components/SidePanel";
import GamesPage from "./components/GamesPage";
import PianoPage from "./components/PianoPage";
import ArtPage from "./components/ArtPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mePanelOpen, setMePanelOpen] = useState(false);
  const [activePage, setActivePage] = useState("games");

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(savedTheme === "dark" || (!savedTheme && prefersDark));
  }, []);

  // Update document classes and localStorage when theme/panel changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    const bodyClasses = [darkMode ? "dark" : "light"];
    if (mePanelOpen) bodyClasses.push("panel-open");
    document.body.className = bodyClasses.join(" ");
  }, [darkMode, mePanelOpen]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMePanel = () => setMePanelOpen(!mePanelOpen);

  const navigateToPage = (page: string) => {
    setActivePage(page);
    setMePanelOpen(false);
  };

  return (
    <div className="app-container">
      <Header
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        mePanelOpen={mePanelOpen}
        onToggleMePanel={toggleMePanel}
        onNavigateToGames={() => navigateToPage("games")}
      />

      <SidePanel 
        isOpen={mePanelOpen} 
        onNavigate={navigateToPage}
        onClose={() => setMePanelOpen(false)}
      />

      <main className="main-content">
        {activePage === "games" && <GamesPage />}
        {activePage === "piano" && <PianoPage />}
        {activePage === "art" && <ArtPage />}
      </main>
    </div>
  );
}

export default App;
