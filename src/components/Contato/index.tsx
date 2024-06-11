import { useDispatch, useSelector } from 'react-redux'
import { BsPersonSquare } from 'react-icons/bs'

import { RootState } from '../../store'

import * as style from './style'
import { Container } from '../../styles'
import { excluir } from '../../store/reducers/contato'

interface ContatoProps {
  setEditingContactId: (id: number | undefined) => void
}

const Contato: React.FC<ContatoProps> = ({ setEditingContactId }) => {
  const contatos = useSelector((state: RootState) => state.contatos.contatos)
  const dispatch = useDispatch()

  const excluirContato = (id: number) => {
    dispatch(excluir(id))
  }

  const editarContato = (id: number) => {
    setEditingContactId(id)
  }
  return (
    <>
      {contatos.map((contato) => (
        <Container key={contato.id}>
          <style.ListaContato>
            <style.Ref>
              <style.Icon>
                <BsPersonSquare />
              </style.Icon>
              <style.Infos>
                <style.Nome>{contato.nome}</style.Nome>
                <li>{contato.email}</li>
                <li>{contato.telefone}</li>
              </style.Infos>
            </style.Ref>

            <style.Exe>
              <style.Editar onClick={() => editarContato(contato.id)}>
                Edit
              </style.Editar>
              <style.Excluir onClick={() => excluirContato(contato.id)}>
                Delete
              </style.Excluir>
            </style.Exe>
          </style.ListaContato>
        </Container>
      ))}
    </>
  )
}

export default Contato
