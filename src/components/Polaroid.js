import React, { useState } from "react";
import "./Polaroid.css";

const Polaroid = ({ id, image, text, flipped, onClick, onTextChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    onTextChange(editText);
    setIsEditing(false);
  };

  const handleTextCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  return (
    <div
      className={`polaroid-container ${flipped ? "flipped" : ""}`}
      onClick={onClick}
    >
      <div className="polaroid">
        <div className="polaroid-front">
          <div className="photo-placeholder">
            {image ? (
              <img
                src={image}
                alt={`Polaroid ${id}`}
                className="polaroid-image"
              />
            ) : (
              <div className="placeholder-content">
                <span className="placeholder-icon">📷</span>
                <span className="placeholder-text">
                  Clique para adicionar uma foto
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="polaroid-back">
          <div className="back-content">
            {isEditing ? (
              <form onSubmit={handleTextSubmit} className="text-form">
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  placeholder="Digite uma mensagem romântica..."
                  className="text-input"
                  autoFocus
                />
                <div className="form-buttons">
                  <button type="submit" className="save-btn">
                    Salvar
                  </button>
                  <button
                    type="button"
                    onClick={handleTextCancel}
                    className="cancel-btn"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-display">
                {text ? (
                  <p className="romantic-text">{text}</p>
                ) : (
                  <p className="empty-text">
                    Clique para escrever uma mensagem romântica
                  </p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(true);
                  }}
                  className="edit-btn"
                >
                  ✏️
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polaroid;
