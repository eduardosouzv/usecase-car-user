import { useState } from 'react';
import { useUserStore } from '../User/store';
import { useCarStore } from './store';

import './styles.css';

export function Shop() {
  const { pushNewSell } = useCarStore();
  const { addCarToGarage } = useUserStore();

  const [owner, setOwner] = useState('');
  const [message, setMessage] = useState('');

  function buy(color) {
    if (!owner) {
      setMessage("owner can't be empty");
      return;
    }

    const newCar = { id: crypto.randomUUID(), owner, color };
    pushNewSell(newCar);
    addCarToGarage(newCar);
    setMessage(`new car added to ${owner}, color ${color.toLowerCase()}`);
  }

  function handleOwnerChange(event) {
    setOwner(event.target.value);
  }

  return (
    <div>
      <div className="owner">
        <span>owner</span>
        <input type="text" onChange={handleOwnerChange} />
      </div>
      <div className="car-shop">
        <div>
          <h1>🚗</h1>
          <p>red</p>
          <button onClick={() => buy('RED')}>buy</button>
        </div>

        <div>
          <h1>🚘</h1>
          <p>blue</p>
          <button onClick={() => buy('BLUE')}>buy</button>
        </div>

        <div>
          <h1>🚙</h1>
          <p>green</p>
          <button onClick={() => buy('GREEN')}>buy</button>
        </div>
      </div>

      <p className="car-message">{message}</p>
    </div>
  );
}
