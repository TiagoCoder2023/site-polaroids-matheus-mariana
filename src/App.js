import React, { useState } from "react";
import "./App.css";
import Polaroid from "./components/Polaroid";
import Timer from "./components/Timer";

function App() {
  const [polaroids, setPolaroids] = useState([
    { id: 1, image: "/site-polaroids-matheus-mariana/images/foto1.jpeg", text: "", flipped: false },
    { id: 2, image: "/site-polaroids-matheus-mariana/images/foto2.jpeg", text: "", flipped: false },
    { id: 3, image: "/site-polaroids-matheus-mariana/images/foto3.jpeg", text: "", flipped: false },
    { id: 4, image: "/site-polaroids-matheus-mariana/images/foto4.jpeg", text: "", flipped: false },
    { id: 5, image: "/site-polaroids-matheus-mariana/images/foto5.jpeg", text: "", flipped: false },
    { id: 6, image: "/site-polaroids-matheus-mariana/images/foto6.jpeg", text: "", flipped: false },
    { id: 7, image: "/site-polaroids-matheus-mariana/images/foto7.jpeg", text: "", flipped: false },
    { id: 8, image: "/site-polaroids-matheus-mariana/images/foto8.jpeg", text: "", flipped: false },
    { id: 9, image: "/site-polaroids-matheus-mariana/images/foto9.jpeg", text: "", flipped: false },
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
