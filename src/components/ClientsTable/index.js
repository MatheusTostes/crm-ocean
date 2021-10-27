import { Container, Table } from './styles'
import { ReactComponent as EditIcon } from './images/edit.svg';
import { ReactComponent as DeleteIcon } from './images/delete.svg';

function ClientsTable () {
  const json = [
    {'pic':'https://insdrcdn.com/media/attachments/d/21/9e0ff421d.jpg',
      'nome':'Elon Musk','Email':'elon_musk@hotmail.com','Data':'20/05/2021','Horario':'18:30','NPedido':'12466','metodoPag':'Cartao de Crédito - Visa'},
    {'pic':'https://e7.pngegg.com/pngimages/41/901/png-clipart-jeff-bezos-amazon-com-new-mexico-chief-executive-business-magnate-others-miscellaneous-head.png',
      'nome':'Jeff Bezos','Email':'jeff_bezos@hotmail.com','Data':'20/05/2021','Horario':'13:15','NPedido':'12465','metodoPag':'Cartao de Crédito - Master Card'},
    {'pic':'https://lilianpacce.s3.amazonaws.com/wp-content/uploads/2019/04/110419-bernard-arnault.jpg',
      'nome':'Bernard Arnault','Email':'bernard_arnault@hotmail.com','Data':'20/05/2021','Horario':'12:50','NPedido':'12464','metodoPag':'Boleto Bancário'},
    {'pic':'https://oespecialista.com.br/wp-content/uploads/2021/02/bill-gates-portrait-518x307.jpg', 
      'nome':'Bill Gates','Email':'bill_gates@hotmail.com','Data':'19/05/2021','Horario':'13:30','NPedido':'12463','metodoPag':'Cartao de Dédito - Visa'},
    {'pic':'https://w7.pngwing.com/pngs/997/511/png-transparent-mark-zuckerberg-harvard-university-facebook-chief-executive-chan-zuckerberg-initiative-mark-zuckerberg-celebrities-blue-face-thumbnail.png',
      'nome':'Mark Zuckerberg','Email':'mark_zuckerberg@hotmail.com','Data':'19/05/2021','Horario':'07:02','NPedido':'12462','metodoPag':'Cartao de Crédito - Visa'},
    {'pic':'https://istoe.com.br/wp-content/uploads/sites/14/2016/01/as_2763066667695345.jpg',
      'nome':'Larry Ellison','Email':'larry_ellison@hotmail.com','Data':'18/05/2021','Horario':'22:12','NPedido':'12461','metodoPag':'Paypal'}
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
              </tr>
            )}
            </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ClientsTable;