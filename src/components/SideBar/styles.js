import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background-color: #fcfcfc;
  width: 250px;
  height: 97vh;
  padding: 3vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 10px #B8CEEF;
`
export const Logo = styled.div`
  margin: 10px 30px 30px 30px;
  background-color: #010101;
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
`
export const Nav = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Button = styled.button`
  margin: 2px 0;
  padding: 15px 45px 15px 50px;
  text-align: left;
  color: #353535;
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;

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
export const NavGroup = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`