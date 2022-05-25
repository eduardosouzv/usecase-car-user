import create from 'zustand';

export const useUserStore = create(set => ({
  garageCars: [],
  addCarToGarage: car => set(state => state.garageCars.push(car)),
  changeColorById: (color, id) =>
    set(state => {
      const carWithNewColor = state.garageCars.find(car => car.id === id);
      carWithNewColor.color = color;

      const meetCarsWithoutOldCarColor = state.garageCars.filter(
        car => car.id !== carWithNewColor.id,
      );
      meetCarsWithoutOldCarColor.push(carWithNewColor);

      return set(state => (state.garageCars = meetCarsWithoutOldCarColor));
    }),
  removeById: id => set(state => state.garageCars.filter(car => car.id !== id)),
}));
