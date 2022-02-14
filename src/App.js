
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Game from './components/Game'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
        <Sidebar />
        <Game />


      </div>

    </div>
  );
}

export default App;
