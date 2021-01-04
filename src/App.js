import './App.scss';
import Counter from './components/Counter';
import logo from './assets/images/F1-Logo.png'

function App() {
  return (
    <div className="App">
    <img src={logo} alt="" style={{height: "7rem"}}/>
      <Counter />
    </div>
  );
}

export default App;
