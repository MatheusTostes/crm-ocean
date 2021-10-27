import { Container, Table } from './styles'
import { ReactComponent as EditIcon } from './images/edit.svg';
import { ReactComponent as DeleteIcon } from './images/delete.svg';

function ClientsTable () {
  const json = [
    {'pic':'https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.6435-9/71055349_2287345131314034_8374574125640843264_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vsZNTVFKxX0AX_qdSW1&_nc_ht=scontent.fsdu1-1.fna&oh=4af3fdfedaccfc860f73ccdcf405e0bc&oe=619DE197','nome':'Matheus Alves Tostes','Email':'matheus_tostes@hotmail.com','Data':'20/05/2020','Horario':'18:30','NPedido':'12466','metodoPag':'Cartao de Crédito - Visa'},
    {'pic':'https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.6435-9/71055349_2287345131314034_8374574125640843264_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vsZNTVFKxX0AX_qdSW1&_nc_ht=scontent.fsdu1-1.fna&oh=4af3fdfedaccfc860f73ccdcf405e0bc&oe=619DE197','nome':'Ronaldo','Email':'ronaldo@hotmail.com','Data':'02/02/2019','Horario':'13:30','NPedido':'12370','metodoPag':'Cartao de Dédito - Visa'},
    {'pic':'https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.6435-9/71055349_2287345131314034_8374574125640843264_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vsZNTVFKxX0AX_qdSW1&_nc_ht=scontent.fsdu1-1.fna&oh=4af3fdfedaccfc860f73ccdcf405e0bc&oe=619DE197','nome':'Matheus','Email':'matheus_tostes@hotmail.com','Data':'20/05/2020','Horario':'18:30','NPedido':'12466','metodoPag':'Cartao de Crédito - Visa'},
    {'pic':'https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.6435-9/71055349_2287345131314034_8374574125640843264_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vsZNTVFKxX0AX_qdSW1&_nc_ht=scontent.fsdu1-1.fna&oh=4af3fdfedaccfc860f73ccdcf405e0bc&oe=619DE197','nome':'Ronaldo','Email':'ronaldo@hotmail.com','Data':'02/02/2019','Horario':'13:30','NPedido':'12370','metodoPag':'Cartao de Dédito - Visa'},
    {'pic':'https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.6435-9/71055349_2287345131314034_8374574125640843264_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vsZNTVFKxX0AX_qdSW1&_nc_ht=scontent.fsdu1-1.fna&oh=4af3fdfedaccfc860f73ccdcf405e0bc&oe=619DE197','nome':'Matheus','Email':'matheus_tostes@hotmail.com','Data':'20/05/2020','Horario':'18:30','NPedido':'12466','metodoPag':'Cartao de Crédito - Visa'},
    {'pic':'https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.6435-9/71055349_2287345131314034_8374574125640843264_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vsZNTVFKxX0AX_qdSW1&_nc_ht=scontent.fsdu1-1.fna&oh=4af3fdfedaccfc860f73ccdcf405e0bc&oe=619DE197','nome':'Ronaldo','Email':'ronaldo@hotmail.com','Data':'02/02/2019','Horario':'13:30','NPedido':'12370','metodoPag':'Cartao de Dédito - Visa'}
  ]

  return (
    <>
      <Container>
      <h3>Ultimos pedidos realizados</h3>
        <Table>
          <tr>
            <th><h4>Nome</h4></th>
            <th><h4>E-mail</h4></th>
            <th><h4>Data</h4></th>
            <th><h4>Horário</h4></th>
            <th><h4>Nº do Pedido</h4></th>
            <th><h4>Método de pagamento</h4></th>
            {/* <th className="action-column"></th>
            <th className="action-column"></th> */}
          </tr>
          <tbody>
          {json.map((client, index) => 
              <tr key={index}>
                <td><div className="client-div"><img src={client.pic} alt=''/><h5>{client.nome}</h5></div></td>
                <td><h5>{client.Email}</h5></td>
                <td><h5>{client.Data}</h5></td>
                <td><h5>{client.Horario}</h5></td>
                <td><h5>{client.NPedido}</h5></td>
                <td>
                  <div className="payment-edit-div">
                    <h5>{client.metodoPag}</h5> 
                      <div className="actions-div">
                        <button><EditIcon className="action-button"/></button>
                        <button><DeleteIcon className="action-button"/></button>
                    </div>
                  </div>
                </td>
                {/* <td className="action-column"><button><EditIcon className="action-button"/></button></td>
                <td className="action-column"><button><DeleteIcon className="action-button"/></button></td> */}
              </tr>
            )}
            </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ClientsTable;