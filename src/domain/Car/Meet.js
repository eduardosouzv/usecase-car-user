import { useCarStore } from './store';

export function Meet() {
  const { meetCars } = useCarStore();

  return (
    <div>
      {meetCars.map(({ id, owner, color }) => (
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
        </div>
      ))}
    </div>
  );
}
