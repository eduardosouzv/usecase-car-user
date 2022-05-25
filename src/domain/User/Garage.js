import { useUserStore } from './store';

export function Garage() {
  const { garageCars, changeColorById } = useUserStore();

  function changeCarColor(id) {
    const color = prompt('1 - red \n2-blue \n 3-green');

    switch (color) {
      case '1':
        changeColorById('RED', id);
        break;
      case '2':
        changeColorById('BLUE', id);
        break;
      case '3':
        changeColorById('GREEN', id);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {garageCars.map(({ id, owner, color }) => (
        <div key={id}>
          <span>🏎️</span>
          <br />
          <span>id {id}</span>
          <br />
          <span>
            owner <strong>{owner}</strong>
          </span>
          <br />
          <span>
            color <strong>{color}</strong>
          </span>
          <br />
          <button onClick={() => changeCarColor(id)}>change color</button>
        </div>
      ))}
    </div>
  );
}
