import React, { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import SideBar from './components/SideBar'
import Header from './components/Header'
import StatisticCards from './components/StatisticCards'
import DashboardsPanel from './components/DashboardsPanel'
import ClientsTable from './components/ClientsTable'
import { Container, Content } from './styles'

function App() {
  return (
    <Fragment>
    <GlobalStyle/>
      <Container>
        <SideBar/>
        <Content>
          <Header/>
          <StatisticCards/>
          <DashboardsPanel/>
          <ClientsTable/>
        </Content>
      </Container>
    </Fragment>
  );
}

export default App;
