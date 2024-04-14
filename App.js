import './styles/App.css';
import './components/header/Header';
import Header from './components/header/Header';
import News from './components/news/News';
import Main from './components/main/Main';
// import Svghuman from './components/svgHuman/SvgHuman';
// import Svgmus from './components/svgMus/SvgMus';
// import Svgon from './components/svgOn/SvgOn';
// import Svgrock from './components/svgRock/SvgRock';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Svgmus />
      <Svgon />
      <Svghuman /> */}
      {/* <Svgrock /> */}
      <News />
    </div>
  );
}

export default App;