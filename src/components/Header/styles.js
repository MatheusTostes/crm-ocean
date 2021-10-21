import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SearchBox = styled.div`
  background: white;
  width: 30%;
  height: 15px;
  padding: 10px 2px;
  display: flex;
  align-items: center;
  border-radius: 50px;

  .search-icon {
    height: 15px;
    background: none;
    margin: 0 10px;
    opacity: 0.25;
  }
`
export const Input = styled.input`
  background: none;
  width: 100%;
  border: none;
  outline: none;
  caret-color: rgba(7,159,255,1);
  color: rgba(7,159,255,1);
  font-size: 0.8rem;
`
export const User = styled.div`
  height: 100%;

  img {
    background: -webkit-linear-gradient(270deg, rgba(7,159,255,0.3) 0%, rgba(26,244,180,0.3) 100%);
    height: 100%;
    width: 30px;
    padding: 1px;
    border-radius: 50px;
    cursor: pointer;
  }

  .notification-icon{
    width: 18px;
    margin-right: 10px; 
    cursor: pointer;
    transform: rotate(30deg);
    fill: #353535;

    :hover {
      transform: rotate(0deg);
      transition: 0.3s;
    }
  }

  .options-icon{
    width: 10px;
    margin: 0 -3px 0 2px; 
    cursor: pointer;
    fill: #353535;
  }
`
export const OptionsBox = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  width: 120px;
  right: 2.1%;
  margin-top: -12px;
  padding: 5px;
  border-radius: 10px 0px 10px 10px;
  display: ${props => `${props.state}`};
  box-shadow: 2px 4px 5px #B8CEEF;

  .options-text{
    background: none;
    color: #353535;
    margin: 3px 8px;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #353535;
    margin: 9px 0;
  }
`
export const Button = styled.button`
  background: none;
  width: 100%;
  padding: 6px 8px;
  margin: 2px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.7rem;
  text-align: left;

  :hover {
    color: white;
    background-color: #353535;  
  }
`