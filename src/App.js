// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WeatherApp from './components/WeatherApp';
import CalendarConverter from './components/CalendarConverter';
import TicTacToe from './components/TicTacToe';
import CoinFlipGame from './components/CoinFlipGame';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/calendar-converter" element={<CalendarConverter />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/coin-flip" element={<CoinFlipGame />} />
      </Routes>
    </Router>
  );
}

export default App;
