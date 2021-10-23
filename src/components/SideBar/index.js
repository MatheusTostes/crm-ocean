import { useState, useRef, useEffect} from 'react';
import { Container, MenuOnButton, Hr1, Hr2, Hr3, MenuBar, NavGroup, Logo, Nav, Button } from './styles'
import { ReactComponent as DashboardIcon } from './images/dashboard.svg';
import { ReactComponent as PedidosIcon } from './images/pedidos.svg';
import { ReactComponent as ProdutosIcon } from './images/produtos.svg';
import { ReactComponent as FinanceiroIcon } from './images/financeiro.svg';
import { ReactComponent as ClientesIcon } from './images/clientes.svg';
import { ReactComponent as SairIcon } from './images/sair.svg';

function SideBar () {
  const [menuOn, setMenuOn] = useState(false)

  function openMenu() {
    setMenuOn(!menuOn)
  }

  let menuRef = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        console.log("clicando fora")
        setMenuOn(false)
      }
    })
  })

  return (
  <Container ref={menuRef}>
    <MenuOnButton onClick={openMenu}>
      <Hr1 className="hrPrimary" menuState={menuOn}/>
      <Hr2 className="onHide" menuState={menuOn}/>
      <Hr3 className="hrSecondary" menuState={menuOn}/>
    </MenuOnButton>
    <MenuBar menuState={menuOn}>
      <NavGroup>
        <Logo>
          <img src="./images/logo.png" alt="logo"/>
        </Logo>
        <Nav>
          <Button className="activeButton">
            <DashboardIcon className="svgButton"/>
            <h4>Dashboard</h4>
          </Button>
          <Button>
            <PedidosIcon className="svgButton"/>
            <h4>Pedidos</h4>
          </Button>
          <Button>
            <ProdutosIcon className="svgButton"/>
            <h4>Produtos</h4>
          </Button>
          <Button>
            <ClientesIcon className="svgButton"/>
            <h4>Clientes</h4>
          </Button>
          <Button>
            <FinanceiroIcon className="svgButton"/>
            <h4>Financeiro</h4>
          </Button>
        </Nav>
      </NavGroup>

      <Button>
        <SairIcon className="svgButton"/>
        <h4>Sair</h4>
      </Button>
    </MenuBar>
  </Container>
  )
}

export default SideBar;