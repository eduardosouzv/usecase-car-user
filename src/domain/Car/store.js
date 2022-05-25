import create from 'zustand';

export const useCarStore = create(set => ({
  meetCars: [],
  pushNewSell: car => set(state => state.meetCars.push(car)),
}));
