import { PropsWithChildren, createContext } from 'react';

const ColorContext = createContext({ hexColor: '#FFADEF' });

export const ColorProvider = ({ children }: PropsWithChildren) => {
  return (
    <ColorContext.Provider value={{ hexColor: '#BADA55' }}>
      {children}
    </ColorContext.Provider>
  );
};
