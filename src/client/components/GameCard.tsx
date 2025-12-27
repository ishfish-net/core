import { Gamepad2 } from "lucide-react";
import "./GameCard.css";

interface GameCardProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function GameCard({
  title,
  description,
  primaryButtonText = "Create Room",
  secondaryButtonText = "Join with Code",
  onPrimaryClick,
  onSecondaryClick,
}: GameCardProps) {
  return (
    <div className="game-card">
      <div className="game-header">
        <Gamepad2 className="game-icon" size={32} />
        <h3 className="game-title">{title}</h3>
      </div>
      <p className="game-description">{description}</p>
      <div className="game-buttons">
        <button className="game-btn game-btn-primary" onClick={onPrimaryClick}>
          {primaryButtonText}
        </button>
        <button
          className="game-btn game-btn-secondary"
          onClick={onSecondaryClick}
        >
          {secondaryButtonText}
        </button>
      </div>
    </div>
  );
}
