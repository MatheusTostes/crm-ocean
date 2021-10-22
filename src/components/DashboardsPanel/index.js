import { Container, CardHeader, Periods } from './styles'

function DashboardsPanel () {
  return (
    <>
      <Container>
        <CardHeader>
          <h2>Relatório de Vendas</h2>
          <Periods>
            <hr className="vendasAntigas" />
            <h5>Vendas de 2020</h5>
            <hr className="vendasRecentes" />
            <h5>Vendas de 2021</h5>
          </Periods>
        </CardHeader>
        
      </Container>
    </>
  )
}

export default DashboardsPanel;