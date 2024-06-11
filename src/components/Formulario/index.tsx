import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdPersonAdd } from 'react-icons/io'

import * as style from './style'
import { AppDispatch, RootState } from '../../store'
import { adicionar, editar } from '../../store/reducers/contato'

interface ContactFormProps {
  editingContactId?: number
  setEditingContactId?: (id: number | undefined) => void
}

const Formulario: React.FC<ContactFormProps> = ({
  editingContactId,
  setEditingContactId
}) => {
  const dispatch: AppDispatch = useDispatch()
  const contactToEdit = useSelector((state: RootState) =>
    state.contatos.contatos.find((contato) => contato.id === editingContactId)
  )

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (contactToEdit) {
      setNome(contactToEdit.nome)
      setTelefone(contactToEdit.telefone)
      setEmail(contactToEdit.email)
    }
  }, [contactToEdit])

  const adicionarContato = (event: React.FormEvent) => {
    event.preventDefault()
    if (editingContactId !== undefined) {
      dispatch(editar({ id: editingContactId, nome, telefone, email }))
      if (setEditingContactId) setEditingContactId(undefined)
    } else {
      const novoContato = {
        id: Date.now(),
        nome,
        email,
        telefone
      }
      dispatch(adicionar(novoContato))
    }
    setNome('')
    setTelefone('')
    setEmail('')
  }
  return (
    <style.Formulario>
      <style.ContainerFormulario>
        <form onSubmit={adicionarContato}>
          <style.Input
            type="text"
            value={nome}
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
          />
          <style.Input
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <style.Input
            type="tel"
            value={telefone}
            placeholder="Telefone"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <style.BotaoAd type="submit">
            <IoMdPersonAdd />
            Adicionar
          </style.BotaoAd>
        </form>
      </style.ContainerFormulario>
    </style.Formulario>
  )
}

export default Formulario
