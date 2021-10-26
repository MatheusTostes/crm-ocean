import { Container, Card, CardHeader, Periods, SubCards } from './styles'
import Graphics from '../Graphics' 

function DashboardsPanel () {
  return (
    <>
      <Container>
        <Card>
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
          <Graphics
            interval={['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']}
            data1={[...Array(12)].map(e=>~~(Math.random()*(180-110+30)+110))}
            data2={[...Array(12)].map(e=>~~(Math.random()*(190-110+30)+110))}
          />
        </Card>

        <SubCards>
          <Card className="card-extra">
            <CardHeader>
              <h3>R$ 6.000,00</h3>
              <Periods>
                <div>
                  <h5>Relatório de Vendas Semanal</h5>
                </div>
              </Periods>
            </CardHeader>
            <Graphics 
              interval={['1 Julho', '8 Julho', '16 Julho', '24 Julho', '31 Julho']}
              // data1={[...Array(5)].map(e=>~~(Math.random()*(180-110+30)+110))}
              data2={[...Array(5)].map(e=>~~(Math.random()*(190-110+30)+110))}
            />
          </Card>
          <Card className="card-extra">
            <CardHeader>
              <h3>R$ 27.000,00</h3>
              <Periods>
                <div>
                  <h5>Relatório de Vendas Mensal</h5>
                </div>
              </Periods>
            </CardHeader>
            <Graphics 
              interval={['31 Jan', '30 Fev', '31 Mar', '30 Abr', '31 Mai', '30 Jun', '31 Jul']}
              // data1={[...Array(7)].map(e=>~~(Math.random()*(180-110+30)+110))}
              data2={[...Array(7)].map(e=>~~(Math.random()*(190-110+30)+110))}
            />
          </Card>
        </SubCards> 
      </Container>
    </>
  )
}

export default DashboardsPanel;