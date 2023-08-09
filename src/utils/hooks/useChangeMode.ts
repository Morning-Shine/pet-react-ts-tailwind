import { MODE_DARK, MODE_LIGHT } from 'constants/theme/theme';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { changeMode } from 'store/themeSlice';
import { TMode } from 'constants/theme/type.theme.constant';


const useChangeMode = (): [
  boolean,
  (mode: TMode) => void
] => {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const isEnabled = themeMode === MODE_DARK;
  const dispatch = useAppDispatch();
  const onModeChange = (mode: TMode) => dispatch(changeMode(mode));

  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    root.classList.remove(isEnabled ? MODE_LIGHT : MODE_DARK);
    root.classList.add(isEnabled ? MODE_DARK : MODE_LIGHT);
  }, [isEnabled]);

  return [isEnabled, onModeChange];
};

export default useChangeMode;
