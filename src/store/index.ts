import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reuducers/tarefas'
import filtroReducer from './reuducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
