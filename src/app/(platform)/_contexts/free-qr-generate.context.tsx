'use client';

import { createContext, type RefObject, useContext, useRef } from 'react';

type FreeQrGenerateContextContextType = {
  inputRef: RefObject<HTMLInputElement>;
  getInputedUrl: () => string;
  focusInputRef: () => void;
};
const FreeQrGenerateContextContext = createContext<FreeQrGenerateContextContextType | null>(null);

export const useFreeQrGenerateContextContext = () => {
  const context = useContext(FreeQrGenerateContextContext);
  if (!context) {
    throw new Error('FreeQrGenerateContextContext Error');
  }
  return context;
};

export const FreeQrGenerateContextContextProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getInputedUrl = () => {
    if (!inputRef.current) return '';
    return `https://${inputRef.current.value}`;
  };

  const focusInputRef = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  return (
    <FreeQrGenerateContextContext.Provider value={{ inputRef, getInputedUrl, focusInputRef }}>
      {children}
    </FreeQrGenerateContextContext.Provider>
  );
};
