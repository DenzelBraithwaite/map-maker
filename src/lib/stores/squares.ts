import { get, writable } from 'svelte/store';

export const squares = writable([]);

export type Tile = {
  id: number | string;
  size?: string;
  color?: string;
  item?: string;
  text?: string;
}

// TODO: will fetch from db in future
export function getSquares(): void {
  for (let i = 1; i <= 2450; i++) {
    localStorage.setItem(`square-${i}`, JSON.stringify({id: i, size: 'size-1', color: 'white', item: ''}));
    squares.update(store => [{id: i, size: 'size-1', color: 'white', item: ''}, ...store]);
  }
  console.log(get(squares));
}

export function clearSquares(): void {
  get(squares).forEach(s => {
    localStorage.setItem(`square-${s.id}`, JSON.stringify({id: s.id, size: s.size, color: 'white', item: ''}));
  });
  squares.update(sq => {
    sq.color = 'white';
    sq.item = '';
    return sq;
  });
} 