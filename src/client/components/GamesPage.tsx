import { Gamepad2 } from "lucide-react";
import "./GamesPage.css";

export default function GamesPage() {
  return (
    <div>
      <h2 className="section-title">Games</h2>
      <div className="game-grid">
        <div className="game-card">
          <div className="game-header">
            <Gamepad2 className="game-icon" size={32} />
            <h3 className="game-title">Game #1</h3>
          </div>
          <p className="game-description">
            Create a room or join with a code to play with friends!
          </p>
          <div className="game-buttons">
            <button className="game-btn game-btn-primary">
              Create Room
            </button>
            <button className="game-btn game-btn-secondary">
              Join with Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
