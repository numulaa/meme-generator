import React from "react";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-title-logo">
            <img src="/assets/troll-face.png" alt="logo" />
            <h1>Meme Generator</h1>
          </div>
          <p>Your meme generator - Play it!</p>
        </nav>
      </header>
    </div>
  );
}
