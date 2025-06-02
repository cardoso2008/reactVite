import React from 'react';
import './footer.css'; // Vamos criar este arquivo de CSS depois

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Portal de Jogos. Todos os direitos reservados.</p>
      <div className="social-links">
        <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#instagram">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;