import {create} from 'zustand';

interface ColorState {
  color: string;
  setColor: (newColor: string) => void;
}

export const useColorStore = create<ColorState>()(set => ({
  color: '#fff',
  setColor: color => set(() => ({color})),
}));
