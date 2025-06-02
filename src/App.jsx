import './App.css'; // Para estilos gerais do App
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="app-container"> {/* Um container para tudo */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;