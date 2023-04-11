import { PropsWithChildren, createContext } from 'react';

type ColorContextState = {
  hexColor: string;
  dispatch: React.Dispatch<ColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#FFADEF',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  return (
    <ColorContext.Provider value={{ hexColor: '#BADA55' }}>
      {children}
    </ColorContext.Provider>
  );
};
