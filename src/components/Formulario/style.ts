import styled from 'styled-components'

import variaveis from '../../styles/variaveis'
import { Container, Botao } from '../../styles'

export const Formulario = styled.div`
  background-color: ${variaveis.cinza};
  padding: 48px;
  margin-bottom: 32px;
`

export const ContainerFormulario = styled(Container)`
  text-align: center;
`

export const Input = styled.input`
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  margin-right: 10px;
`

export const BotaoAd = styled(Botao)`
  background-color: ${variaveis.azul};

  svg {
    margin-right: 8px;
  }
`
