import { TreeColumns } from '@/app/components/columns';
import { ContextMenu } from '@/app/components/context-menu';
import { Header } from '@/app/components/header';
import { ColumnsControllerDND } from '@/app/submodules/columns-controler-dnd';
import { Header } from '@/app/submodules/header';
import { useBookmarks } from '@/app/zustand/bookmarks';
import { useContextMenu } from '@/app/zustand/context-menu';
import { useMenuOptions } from '@/app/zustand/options';
import { useEffect } from 'react';

export const Home = () => {
  const initBookmark = useBookmarks((state) => state.initialState);
  const initOptions = useMenuOptions((state) => state.initOptions);

  useEffect(() => {
    initBookmark();
    initOptions();
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col relative">
      <ContextMenu />
      <Header />
      <ColumnsControllerDND />
    </div>
  );
};
