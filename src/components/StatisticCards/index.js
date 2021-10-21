import { Container, Card, CardText } from './styles'

function StatisticCards () {
  return (
    <>
      <Container>
        <Card>
          <img src="./images/unidades.png" alt="unidades" />
          <CardText>
            <h5>Unidades Registradas</h5>
            <h3>1</h3>
          </CardText>
        </Card>
        <Card>
          <img src="./images/clientes.png" alt="clientes" />
          <CardText>
            <h5>Novos Clientes</h5>
            <h3>104</h3>
          </CardText>
        </Card>
        <Card>
          <img src="./images/vendas.png" alt="vendas" />
          <CardText>
            <h5>Vendas Realizadas</h5>
            <h3>7270</h3>
          </CardText>
        </Card>
        <Card>
          <img src="./images/lucro.png" alt="lucro" />
          <CardText>
            <h5>Lucro Líquido (Geral)</h5>
            <h3>R$ 427.300,50</h3>
          </CardText>
        </Card>
      </Container>
    </>
  )
}

export default StatisticCards;