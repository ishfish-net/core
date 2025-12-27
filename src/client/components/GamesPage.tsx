import GameCard from "./GameCard";
import "./GamesPage.css";

export default function GamesPage() {
  return (
    <div>
      <h2 className="section-title">Games</h2>
      <div className="game-grid">
        <GameCard
          title="Game #1"
          description="Create a room or join with a code to play with friends!"
        />
        <GameCard
          title="Game #2"
          description="Create a room or join with a code to play with friends!"
        />
      </div>
    </div>
  );
}
