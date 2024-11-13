import { configureStore } from '@reduxjs/toolkit'
import matriceSlicer from '../Slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      matrices: matriceSlicer.reducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']