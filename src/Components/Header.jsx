import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <header>
        <h1>Kavárna U Klidného Hrníčku</h1>
      </header>

      <nav className="navbar">
        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navlist ${isOpen ? 'open' : ''}`}>
          <li><a href="#top">O nás</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;