import { X } from "lucide-react";
import "./SidePanel.css";

interface SidePanelProps {
  isOpen: boolean;
  onNavigate: (page: string) => void;
  onClose: () => void;
}

export default function SidePanel({ isOpen, onNavigate, onClose }: SidePanelProps) {
  return (
    <aside className={`me-panel ${isOpen ? "open" : ""}`}>
      <div className="me-panel-header">
        <h2 className="me-panel-title">Me</h2>
        <button
          className="me-panel-close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="me-panel-nav">
        <button
          className="me-nav-item"
          onClick={() => onNavigate("piano")}
        >
          Piano
        </button>
        <button
          className="me-nav-item"
          onClick={() => onNavigate("art")}
        >
          Art
        </button>
      </nav>
    </aside>
  );
}
