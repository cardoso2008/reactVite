import React from 'react';
import './main.css'; // Vamos criar este arquivo de CSS depois

function Main() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <h2>Bem-vindo ao Mundo dos Jogos!</h2>
        <p>Explore as últimas novidades, análises e tendências do universo gamer.</p>
        <button className="cta-button">Ver Notícias</button>
      </section>

      <section className="featured-games">
        <h3>Jogos em Destaque</h3>
        <div className="game-cards">
          <div className="game-card">
            <h4>Minecraft</h4>
            <p>Um mundo vasto a ser explorado!</p>
          </div>
          <div className="game-card">
            <h4>Call of Duty</h4>
            <p>Planeje seus movimentos com sabedoria.</p>
          </div>
          <div className="game-card">
            <h4>F1 2025</h4>
            <p>Sinta a emoção da velocidade.</p>
          </div>
          <div className="game-card">
            <h4>EA FC</h4>
            <p>Chegue no topo do mundo do futebol</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;