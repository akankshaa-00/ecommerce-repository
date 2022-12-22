import './App.css';
import DisplayContent from './Components/DisplayContent/ProductCanvas';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/*<MainPage/>*/}
      <DisplayContent/>
    </div>
  );
}

export default App;
