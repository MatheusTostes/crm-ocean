import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  overflow-x: hidden;

  .card-extra {
    width: 49%;

    @media (max-width: 760px) {
      width: 100%;
    }
  }
`
export const Card = styled.div`
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
  width: 96%;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  font-size: min(1.2vw, 1rem);
  flex-wrap: wrap;
    
  h3, h5 {
    margin: 1vw 0;
  }

  @media (max-width: 950px) {
    font-size: 1rem;
    margin: 1.1vw auto;
    
    h3, h5{
      width: 100%;
      text-align: center;
    }
  }
  
  @media (max-width: 350px) {
    div {
      flex-direction: column;
    }
  }
`
export const Periods = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  /* flex-wrap: wrap; */

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-left: 2rem;

    @media (max-width: 350px) {
      margin: 0;
    }
  }
  
  h5{
    opacity: 0.7;
  }

  .vendasAntigas, .vendasRecentes {
    width: 30px;
    height: 2px;
    border: none;
    margin-right: 0.5rem;
  }

  .vendasAntigas {
    background-color: rgba(7,159,255,1) ;
  }

  .vendasRecentes {
    background-color: rgba(26,244,180,1);
  }

  @media (max-width: 950px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 550px) {
    .vendasAntigas, .vendasRecentes {
      width: 30px;
    }
  }
`
export const SubCards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`