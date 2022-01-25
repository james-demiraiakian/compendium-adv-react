import { BrowserRouter } from 'react-router-dom';
import './App.css';
import APIList from './views/APIList';

function App() {
  return (
    <div className="App">
      <h1>API of APIs</h1>
      <BrowserRouter>
        <APIList path="/" />
      </BrowserRouter>
    </div>
  );
}

export default App;
