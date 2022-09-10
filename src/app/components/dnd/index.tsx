import { useBookmarks } from '@/app/zustand/bookmarks';
import { useMenuOptions } from '@/app/zustand/options';
import { useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { getItems, onDragEnd } from './assets/tools';
import { Item } from './assets/tools/types';
import { DragDropContextProvider } from './components/context';

export function Dragdrop() {
  const columns = useBookmarks((state) => state.columns);
  const searchFolder = useBookmarks((state) => state.searchFolder);
  const searchBar = useMenuOptions((state) => state.searchBar);

  const [state, setState] = useState<Item[][]>([
    getItems(10),
    getItems(5, 10),
    getItems(5, 20),
  ]);

  const handlerOnDragEnd = (result: DropResult) => {
    onDragEnd(result, state, (a: Item[][]) => setState(a));
  };

  return <DragDropContextProvider OnDragEnd={handlerOnDragEnd} state={state} />;
}
