import { IoMdPersonAdd } from 'react-icons/io'

import * as style from './style'

const Formulario = () => {
  return (
    <style.Formulario>
      <style.ContainerFormulario>
        <form action="">
          <style.Input type="text" placeholder="Nome" />
          <style.Input type="email" placeholder="E-mail" />
          <style.Input type="tel" placeholder="Telefone" />
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
