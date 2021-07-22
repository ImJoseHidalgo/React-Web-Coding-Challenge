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

  @media only screen and (max-width: 768px)  {
    width: 90%;
    height: 100px;

    & a > img {
      width: 60px;
      height: 60px;
    } 
  }
`

export const Title = styled.div`
  margin-left: 2rem;

  @media only screen and (max-width: 768px)  {
    h1 {
      font-size: 20px;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 18px;
    }
  }
`