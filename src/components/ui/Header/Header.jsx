import React from 'react'
import { Link } from 'react-router-dom'
import { Container, HeaderStyles, Title } from './Header.styles'

const Header = () => {
  return (
    <HeaderStyles>
      <Container>
        <Link to='/'>
          <img src="https://p1cdn4static.civiclive.com/UserFiles/Servers/Server_7964838/Templates/Police/police-logo-380.png" alt="Police Logo" />
        </Link>
        <Title>
          <h1>Police Departament of Berlin</h1>
          <h2>Stole bykes</h2>
        </Title>
      </Container>
    </HeaderStyles>
  )
}

export default Header
