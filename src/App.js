import { Routes, Route, Link } from 'react-router-dom';

import './app.css';

import { Shop } from './domain/Car/Shop';
import { Meet } from './domain/Car/Meet';
import { Garage } from './domain/User/Garage';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/garage">user garage</Link>
        <Link to="/car/shop">car shop</Link>
        <Link to="/car/meet">car meet</Link>
      </nav>

      <Routes>
        <Route path="/garage" element={<Garage />} />
        <Route path="/car/shop" element={<Shop />} />
        <Route path="/car/meet" element={<Meet />} />
      </Routes>
    </div>
  );
}
