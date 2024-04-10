
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Register from './pages/register/Register';
import Flights from './pages/flights/Flights';
import Car from './pages/car/Car';
import Attraction from './pages/attraction/Attraction';
import Taxi from './pages/taxi/Taxi';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/car" element={<Car />} />
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/taxi" element={<Taxi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
