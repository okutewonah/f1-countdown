import './assets/styles/App.scss';
import Counter from './components/Counter';
import logo from './assets/images/F1-Logo.png'

function App() {
  return (
    <div className="App">
      <img src={logo} alt="" className="logo"/>
      <Counter />
    </div>
  );
}

export default App;
