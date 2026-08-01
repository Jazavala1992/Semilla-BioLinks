import React from "react";
import "./UbicacionesModal.css";

interface UbicacionesModalProps {
  isOpen: boolean;
  onClose: () => void;
  locations: Array<{
    name: string;
    address: string;
    href?: string;
  }>;
}

const UbicacionesModal: React.FC<UbicacionesModalProps> = ({ isOpen, onClose, locations }) => {
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="ubicaciones-modal" role="presentation" onClick={onClose}>
      <div
        className="ubicaciones-modal__content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ubicaciones-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="ubicaciones-modal__close" onClick={onClose} aria-label="Cerrar modal">
          ×
        </button>
        <h2 className="ubicaciones-modal__title" id="ubicaciones-modal-title">Nuestras Ubicaciones</h2>
        <h3 className="ubicaciones-modal__subtitle">Encuéntra nuestros productos en esto lugares:</h3>
        <ul className="ubicaciones-modal__list">
          {locations.map((location) => (
            <li key={location.name} className="ubicaciones-modal__item">
              <div className="ubicaciones-modal__item-text">
                <strong>{location.name}</strong>
                <span>{location.address}</span>
              </div>
              {location.href ? (
                <a href={location.href} target="_blank" rel="noopener noreferrer" className="ubicaciones-modal__link">
                  Abrir mapa
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UbicacionesModal;