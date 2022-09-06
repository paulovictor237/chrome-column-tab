import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { optionsActions } from '../../store/optionsReducer';
import Switch from './Switch';

export default function NewTab() {
  const dispach = useDispatch();
  function optionsHandler() {
    dispach(optionsActions.changeNewTab());
  }
  const newTab = useSelector((state: RootState) => state.optionsReducer.newTab);

  return (
    <>
      <span>New tab</span>
      <Switch variable={newTab} OnClick={optionsHandler} />
    </>
  );
}
