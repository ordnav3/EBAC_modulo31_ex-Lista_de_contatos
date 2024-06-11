import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ContatoType {
  id: number
  nome: string
  telefone: string
  email: string
}

type Contatostate = {
  contatos: ContatoType[]
}

const initialState: Contatostate = {
  contatos: []
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<ContatoType>) => {
      state.contatos.push(action.payload)
    },
    editar: (state, action: PayloadAction<ContatoType>) => {
      const index = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (index !== -1) {
        state.contatos[index] = action.payload
      }
    },
    excluir: (state, action: PayloadAction<number>) => {
      state.contatos = state.contatos.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { adicionar, editar, excluir } = contatoSlice.actions

export default contatoSlice.reducer
