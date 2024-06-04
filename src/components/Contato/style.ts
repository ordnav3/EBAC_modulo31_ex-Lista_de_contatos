import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const ListaContato = styled.div`
  background-color: ${variaveis.cinza};
  padding: 32px;
  border-radius: 8px;
  margin-bottom: 24px;
`

export const Ref = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.div`
  font-size: 64px;
`

export const Infos = styled.ul`
  margin-left: 32px;
`

export const Nome = styled.li`
  font-size: 32px;
  font-weight: 800;
`

export const Exe = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Editar = styled(Botao)`
  background-color: ${variaveis.amarelo};
`

export const Excluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
