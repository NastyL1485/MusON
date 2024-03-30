import './styles/App.css';
import './components/header/Header';
import Header from './components/header/Header';

function App() {
  const h1 = "Тут что-то типо крутой сайт";
  return (
    <div className="App">
      <Header />
      <h1>{h1}</h1>
    </div>
  );
}

export default App;