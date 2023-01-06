import type { FC } from 'react';
import React, { createContext, useState } from 'react';
import { useFetchImages } from '../hooks';

interface CountStoreProviderProps {
  children?: React.ReactNode;
}

interface Value {
  isLoading: boolean;
  images: string[];
}

export const CardContext = createContext<Value>({
  isLoading: false,
  images: [],
});

const CardProvider: FC<CountStoreProviderProps> = ({ children }) => {
  const { isLoading, images } = useFetchImages(16);

  console.log(`isLoading: ${isLoading}`);
  console.log(images);

  return (
    <CardContext.Provider value={{ isLoading, images }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
