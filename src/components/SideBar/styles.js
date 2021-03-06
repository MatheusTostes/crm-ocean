import styled from 'styled-components'

export const Container = styled.div`
`
export const MenuOnButton = styled.button`
  position: fixed;
  width: 35px;
  height: 35px;
  margin: 1.2% 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: none;
  border: none;
  opacity: 0.8;
  cursor: pointer;
  z-index: 2;

  @media (min-width: 1000px) {
    display: none;
  }
`
export const Hr = styled.hr`
  background: #353535;
  width: 100%;
  height: 7px;
  border: none;
  border-radius: 3px;
`
export const Hr1 = styled(Hr)`
  transform: ${props => (props.menuState) 
  ? 'translate(0, 10px) rotate(45deg)' 
  : 'rotate(0deg)'};
  transition: 0.5s;
`
export const Hr2 = styled(Hr)`
  display: ${props => (props.menuState) ? 'none' : 'block'};
`
export const Hr3 = styled(Hr)`
  transform: ${props => (props.menuState) 
  ? 'translate(0, -8px) rotate(-45deg)' 
  : 'rotate(0deg)'};
  transition: 0.5s;
`

export const MenuBar = styled.div`
  position: fixed;
  background-color: #fcfcfc;
  width: 250px;
  height: 97vh;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 10px #B8CEEF;
  animation-name: example;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  
  /* :hover {
    margin-left: ${props => props.menuState ? '0px' : '-150px'};
    transition: 0.5s;
  } */
  

  .activeButton {
    padding-left: 82px;
    cursor: default;
    transition: 0.2s;
    h4 {
      background: -webkit-linear-gradient(270deg, rgba(7,159,255,1) 0%, rgba(26,244,180,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .svgButton {
      fill: -webkit-linear-gradient(270deg, rgba(7,159,255,1) 0%, rgba(26,244,180,1) 100%);
    }

    :hover {
      background: none;
    }
  }

  @media (max-width: 1000px) {
    display: ${props => props.menuState ? 'flex' : 'none'};
    z-index: 1;

    margin-left: -250px;

    @keyframes example{
      100% {margin-left: 0px};
    }

    .quitButton {
      margin-bottom: 40px;
    }
  }
`
export const Logo = styled.div`
  margin: 10px 30px 10px 30px;
  background: none;
  width: 90%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    background: none;
  }
`
export const NavGroup = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Nav = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Button = styled.button`
  width: 100%;
  margin: 2px 0;
  padding: 15px 45px 15px 50px;
  text-align: left;
  display: flex;
  align-items: center;
  color: #353535;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;

  h4 {
    background-color: transparent;
  }
  
  .svgButton {
    background-color: transparent;
    height: 17px;
    margin-right: 12px;
    fill: #353535;
  }

  :hover {
    background-color: #f2f7ff;
    padding-left: 82px;
    transition: 0.2s;
    h4 {
      background: -webkit-linear-gradient(270deg, rgba(7,159,255,1) 0%, rgba(26,244,180,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .svgButton {
      fill: -webkit-linear-gradient(270deg, rgba(7,159,255,1) 0%, rgba(26,244,180,1) 100%);
    }
  }
`