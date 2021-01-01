import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import Sample from './components/Sample';
import SampleContainer from './containers/SampleContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <SampleContainer />
    </div>
  );
}

export default App;
