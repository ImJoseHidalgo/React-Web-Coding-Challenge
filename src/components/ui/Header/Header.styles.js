import styled from "styled-components";

export const HeaderStyles = styled.header`
  background-color: #00070D;
`

export const Container = styled.div`
  display: flex;
  color: #fff;
  height: 150px; 
  align-items: center;
  max-width: 1200px;
  margin: auto;

  & a > img {
    width: 100px;
    height: 100px;
  }
`

export const Title = styled.div`
  margin-left: 2rem;
`