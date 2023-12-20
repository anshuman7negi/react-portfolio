import { Provider } from 'react-redux';
import './App.css';
import FirstVersion from './components/pages/FirstVersion';
import store from './components/redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FirstVersion />
      </div>
    </Provider>
  );
}

export default App;
