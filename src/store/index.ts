import { configureStore } from '@reduxjs/toolkit'

import contatoReducers from './reducers/contato'

export const store = configureStore({
  reducer: {
    contatos: contatoReducers
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
