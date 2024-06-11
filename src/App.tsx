import { Provider } from 'react-redux'

import Formulario from './components/Formulario'
import Header from './components/Header'
import EstiloGlobal from './styles'
import Contato from './components/Contato'
import { store } from './store'
import { useState } from 'react'

const App: React.FC = () => {
  const [editingContactId, setEditingContactId] = useState<number | undefined>(
    undefined
  )
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Formulario
        editingContactId={editingContactId}
        setEditingContactId={setEditingContactId}
      />
      <Contato setEditingContactId={setEditingContactId} />
    </Provider>
  )
}

export default App
