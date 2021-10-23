import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 8px;
  margin: 1.1vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 10px rgba(184, 206, 239, 0.6);
`
export const CardHeader = styled.div`
  background: none;
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  font-size: min(1.2vw, 1rem);
  flex-wrap: wrap;
    
  h3, h5 {
    margin: 1.3%;
  }

  @media (max-width: 950px) {
    font-size: 1rem;
    margin: 1.1vw auto;
    
    h3, h5{
      width: 100%;
      text-align: center;
    }
  }
`
export const Periods = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.3%;

  h5{
    opacity: 0.7;
  }

  hr {
    margin: 10px;
  }

  .vendasAntigas, .vendasRecentes {
    width: 30px;
    height: 2px;
    margin-right: -30px;
    border: none;
  }

  .vendasAntigas {
    background-color: rgba(7,159,255,1) ;
  }

  .vendasRecentes {
    background-color: rgba(26,244,180,1);
  }

  @media (max-width: 950px) {
    margin: auto;

    h5 {
      margin-left: 20px;
    }
  }
`