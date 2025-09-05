import React, { useState } from "react";
import "./App.css";
import Polaroid from "./components/Polaroid";
import Timer from "./components/Timer";

// Importar as imagens corretamente
import foto1 from "./images/foto1.jpeg";
import foto2 from "./images/foto2.jpeg";
import foto3 from "./images/foto3.jpeg";
import foto4 from "./images/foto4.jpeg";
import foto5 from "./images/foto5.jpeg";
import foto6 from "./images/foto6.jpeg";
import foto7 from "./images/foto7.jpeg";
import foto8 from "./images/foto8.jpeg";
import foto9 from "./images/foto9.jpeg";

function App() {
  const [polaroids, setPolaroids] = useState([
    { id: 1, image: foto1, text: "", flipped: false },
    { id: 2, image: foto2, text: "", flipped: false },
    { id: 3, image: foto3, text: "", flipped: false },
    { id: 4, image: foto4, text: "", flipped: false },
    { id: 5, image: foto5, text: "", flipped: false },
    { id: 6, image: foto6, text: "", flipped: false },
    { id: 7, image: foto7, text: "", flipped: false },
    { id: 8, image: foto8, text: "", flipped: false },
    { id: 9, image: foto9, text: "", flipped: false },
  ]);

  const handlePolaroidClick = (id) => {
    setPolaroids((prev) =>
      prev.map((polaroid) =>
        polaroid.id === id
          ? { ...polaroid, flipped: !polaroid.flipped }
          : polaroid
      )
    );
  };

  const handleTextChange = (id, text) => {
    setPolaroids((prev) =>
      prev.map((polaroid) =>
        polaroid.id === id ? { ...polaroid, text } : polaroid
      )
    );
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Matheus e Mariana</h1>
        <Timer />
      </header>

      <main className="main">
        <div className="polaroids-grid">
          {polaroids.map((polaroid) => (
            <Polaroid
              key={polaroid.id}
              id={polaroid.id}
              image={polaroid.image}
              text={polaroid.text}
              flipped={polaroid.flipped}
              onClick={() => handlePolaroidClick(polaroid.id)}
              onTextChange={(text) => handleTextChange(polaroid.id, text)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
