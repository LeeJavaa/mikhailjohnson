import { createContext, useState } from 'react';

export const CursorContext = createContext({
  size: 'small',
  setSize: () => {},
});

export default function CursorManager(props) {
  const { children } = props;
  const [size, setSize] = useState('small');
  return (
    /* eslint-disable react/jsx-no-constructed-context-values */
    <CursorContext.Provider value={{ size, setSize }}>
      {children}
    </CursorContext.Provider>
  );
}
