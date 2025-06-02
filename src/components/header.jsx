import React from 'react';
import './header.css'; // Vamos criar este arquivo de CSS depois


function Header() {
  return (
    <header className="header">
      <h1>Portal de Jogos</h1>
      <nav>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#jogos">Jogos</a></li>
          <li><a href="#noticias">Notícias</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

