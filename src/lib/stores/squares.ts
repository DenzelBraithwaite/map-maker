import { get, writable } from 'svelte/store';

export const squares = writable([]);

export type Tile = {
  id: number | string;
  size?: string;
  color?: string;
  item?: string;
  border?: boolean ;
  text?: string;
}

// TODO: will fetch from db in future
export function getSquares(): void {
  squares.set([]);
  for (let i = 1; i <= 2450; i++) {
    if (localStorage.getItem(`square-${i}`)) {
      const square = JSON.parse(localStorage.getItem(`square-${i}`));
      squares.update(store => [{id: square.id, size: square.size, color: square.color, border: square.border, item: square.item}, ...store]);
    } else {
      localStorage.setItem(`square-${i}`, JSON.stringify({id: i, size: 'size-1', color: 'white', border: false, item: ''}));
      squares.update(store => [{id: i, size: 'size-1', color: 'white', border: true, item: ''}, ...store]);
    }
  }
}