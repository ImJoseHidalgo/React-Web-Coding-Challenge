import styled, { css } from 'styled-components'

export const PaginateContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export const Button = styled.button`
  margin: 0 10px;
  cursor: pointer;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;

  &:hover {
    background-color: lightgrey;
  }
  &:disabled:hover {
    background-color: #FAFAFA;
  }
  
  ${props => props.active && css`
    /* background-color: #00070D; */
    background-color: #0E6AB4;
    font-weight: bold;
    color: #fff;
    
    &:hover {
      background-color: #0E6AB4;
    }
  `}
`