import {create} from 'zustand';

interface ColorState {
  color: string;
  setColor: (newColor: string) => void;
}

export const useColorStore = create<ColorState>()(set => ({
  color: '#000',
  setColor: color => set(() => ({color})),
}));
