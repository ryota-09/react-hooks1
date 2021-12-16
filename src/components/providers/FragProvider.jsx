import { createContext } from 'react';

export const FragContext = createContext({});

export const FragProvider = (props) => {
  const { children } = props;

  const sampleObj = {
    name: 'スズキ',
    age: '13',
    id: '22'
  }

  return (
    <FragContext.Provider value={sampleObj}>
      {children}
    </FragContext.Provider>
  );
}
