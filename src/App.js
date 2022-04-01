import './App.css';
import SearchBar from './components/layout/SearchBar';
import Robots from './components/robots/Robots';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Provider } from "./context"

function App() {
  return (
    <Provider>
    <Router>
      <>
        <SearchBar/>
      </>
      <div>
        <Robots/>
      </div>

    </Router>
    </Provider>
  );
}

export default App;
