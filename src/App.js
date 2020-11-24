import './App.css';

import Provider from './context';
import { RandomComponent, Sibiling } from './components';

function App() {
  return (
    <div className="App">
      <Provider>
        <RandomComponent />
        <Sibiling />
      </Provider>
    </div>
  );
}

export default App;
