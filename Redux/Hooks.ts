import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './Store/Store'
import { useState } from 'react';


export function useMatrixOperations(rows: number, cols: number) {
    const [matrices, setMatrices] = useState<number[][][]>([]);
    const [resultMatrix, setResultMatrix] = useState<number[][]>([]);
  
    const generateMatrices = () => {
      const matrixA = Array.from({ length: rows }, (_, i) => Array.from({ length: cols }, (_, j) => i + j));
      const matrixB = Array.from({ length: rows }, (_, i) => Array.from({ length: cols }, (_, j) => i * j));
      setMatrices([matrixA, matrixB]);
    };
    return { matrices, resultMatrix, generateMatrices };
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()