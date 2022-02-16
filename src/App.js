
import './App.css';
import Header from './components/Header';
import Game from './components/Game'
function App() {
  return (
    <div className='container'>
      <Header/>
      <div className='main-container'>
        <Game />
      </div>

    </div>
  );
}

export default App;
