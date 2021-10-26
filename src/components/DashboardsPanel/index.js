import { Container, CardHeader, Periods } from './styles'
import Graphics from '../Graphics' 

function DashboardsPanel () {
  return (
    <>
      <Container>
        <CardHeader>
          <h3>Relatório de Vendas</h3>
          <Periods>
            <div>
              <hr className="vendasAntigas" />
              <h5>Vendas de 2020</h5>
            </div>
            <div>
              <hr className="vendasRecentes" />
              <h5>Vendas de 2021</h5>
            </div>
          </Periods>
        </CardHeader>
        <Graphics>

        </Graphics>
      </Container>
    </>
  )
}

export default DashboardsPanel;