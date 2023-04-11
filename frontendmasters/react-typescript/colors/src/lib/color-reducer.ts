import { rgb } from 'color-convert';

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorActions,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }
  return state;
};
