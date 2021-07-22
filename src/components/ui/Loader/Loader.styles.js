import styled, { keyframes } from 'styled-components'

const anim = keyframes`
  0% {
    top: 130px;
    height: 64px;
  }
  50%, 100% {
    top: 150px;
    height: 32px;
  }
`

export const LoaderStyles = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;

  & div {
    position: absolute;
    width: 16px;
    background: #000;
    animation: ${anim} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: calc(50% + 20px);
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: calc(50% - 5px);
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: calc(50% - 30px);
    animation-delay: 0;
  }
`