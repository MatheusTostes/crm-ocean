import React, { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { Container } from './styles'

function App() {
  return (
    <Fragment>
    <GlobalStyle/>
      <Container>
        <SideBar/>
        <Header/>
      </Container>
    </Fragment>
  );
}

export default App;
