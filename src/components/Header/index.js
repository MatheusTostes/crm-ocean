import React, { useState } from 'react';
import { Container, SearchBox, Input, User, OptionsBox, Button, Mask } from './styles'
import { ReactComponent as SearchIcon } from './images/search.svg';
import { ReactComponent as NotificationIcon } from './images/notificacao.svg';
import { ReactComponent as OptionsIcon } from './images/opcoes.svg';

function Header () {
  const [userOpt, setUserOpt] = useState("")
  
  function userOptions () {
    if (userOpt === "none") {
      setUserOpt('block')
      console.log(userOpt)
    } else {
      setUserOpt('none')
      console.log(userOpt)
    }
  }

  return (
    <>
      <Container>
        <SearchBox>
          <SearchIcon className="search-icon"/>
          <Input/>
        </SearchBox>
        <User>

          <NotificationIcon className="notification-icon"/>
          <img src="./images/userpic.jpg" alt="foto"/>
          <OptionsIcon onClick={userOptions} className="options-icon"/>
          <OptionsBox state={userOpt}>
            <h6 className="options-text">Conectado como:</h6>
            <h5 className="options-text">Matheus Tostes</h5>
            <hr/>
            <Button>Informações</Button>
            <Button>Alterar Dados</Button>
            <Button>Configurações</Button>
            <Button>Ajuda</Button>
            <Button>Sair</Button>
            {/* <Mask onClick={userOptions}/>  */}
          </OptionsBox>
        </User>
      </Container>
    </>
  )
}

export default Header;