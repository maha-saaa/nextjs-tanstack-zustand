"use client";

import { StoreApi, useStore } from "zustand";
import { ReactNode, createContext, useContext, useRef } from "react";
import { type BoundedStore, createBoundStore } from "../store";

export interface StoreProviderProps {
  children: ReactNode;
  //   store?: BoundedStore;
}

export const StoreContext = createContext<StoreApi<BoundedStore> | null>(null);

export const StoreProviderWrapper = ({ children }: StoreProviderProps) => {
  //   const storeRef = useRef<TStore>();
  const storeRef = useRef<StoreApi<BoundedStore>>();
  if (!storeRef.current) storeRef.current = createBoundStore();

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useBoundStore = <T,>(selector: (store: BoundedStore) => T): T => {
  const storeContext = useContext(StoreContext);

  if (!storeContext) {
    throw new Error(`useBoundStore must be use within StoreProvider`);
  }

  return useStore(storeContext, selector);
};
