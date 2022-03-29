import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import SpringAnimation from './components/SpringAnimation/SpringAnimation';

function App() {
  return (
    <div className="App">
        <MyLineChart></MyLineChart>
        <SpringAnimation></SpringAnimation>
        <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
