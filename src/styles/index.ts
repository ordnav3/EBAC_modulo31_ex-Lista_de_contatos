import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: sans-serif;
    list-style: none;
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Botao = styled.button`
  width: 100px;
  padding: 8px;
  border: none;
  color: ${variaveis.cinza};
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
`
