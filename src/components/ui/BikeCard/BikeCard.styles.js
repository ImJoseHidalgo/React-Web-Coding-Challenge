import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  border-radius: 8px;
  padding: 10px;
  /* box-shadow: 0px 1px 3px rgba(0,0,0,.2); */
  box-shadow: 0px 1px 3px rgb(1, 194, 156,.2);
  transition: box-shadow .1s;
  transition: transform .1s;
  
  &:hover {
    /* border-right: 8px solid lightskyblue; */
    transform: translateY(-1px);
    /* box-shadow: 0px 0px 5px rgba(0,0,0,.3); */
    box-shadow: 0px 0px 5px rgb(1, 194, 156,.3);
  }
  & > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }
`
export const TextContainer = styled.div`
  padding: 30px 40px;

  & > h3 {
    margin-bottom: 20px;
    color: #0E6AB4;
    border-bottom: 1px solid #0E6AB4;
    display: inline-block;
  }
`

export const DetailsContainer = styled.div`
  display: grid;
  min-width: 600px;
  grid-template-columns: 1fr 1fr;

  & > strong {
    color: #0E6AB4;
    line-height: 20px;
    margin-bottom: 20px;
  }
  & strong > span {
    color: #333;
    font-weight: 400;
  }
`