import { BsPersonSquare } from 'react-icons/bs'

import * as style from './style'
import { Container } from '../../styles'

const Contato = () => {
  return (
    <Container>
      <style.ListaContato>
        <style.Ref>
          <style.Icon>
            <BsPersonSquare />
          </style.Icon>

          <style.Infos>
            <style.Nome>Evandro Santos Afonso</style.Nome>
            <li>melhor.evandro@gmail.com</li>
            <li>11948274717</li>
          </style.Infos>
        </style.Ref>

        <style.Exe>
          <style.Editar>Editar</style.Editar>
          <style.Excluir>Excluir</style.Excluir>
        </style.Exe>
      </style.ListaContato>
    </Container>
  )
}

export default Contato
