import logo from './logo.svg';
import './App.css';
import fetchData from './services/api';
import { useEffect } from 'react';

function App() {
  const mod = 'entries';
  useEffect(() => {
    const fetchApi = async () => {
      const data = await fetchData(mod);
      console.log(data.entries);
      return data;
    };
    fetchApi();
  }, []);
  return <div className="App"></div>;
}

export default App;
