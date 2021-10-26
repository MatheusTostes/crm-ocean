import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
`
export const Card = styled.div`
  background-color: white;
  width: min(23%, 300px);
  height: min(6vw, 100px);
  border-radius: 8px;
  margin: 1.1vw 0;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px rgba(184, 206, 239, 0.6);

  img {
    background: none;
    height: 50%;
    margin: 1vw;
  }

  @media (min-width: 951px) {
    width: 23%;
  }
  @media (max-width: 950px) {
    width: 49%;
    height: 60px;
  }
  @media (max-width: 360px) {
    width: 100%;
    height: 60px;
    justify-content: center;
  }
`
export const CardText = styled.div`
  background: none;
  font-size: min(1.2vw, 1rem);
  /* margin: 10px; */
  
  h3, h5{
    background: none;
    margin: 5px;
  }

  h3 {
    background: -webkit-linear-gradient(270deg, rgba(7,159,255,1) 0%, rgba(26,244,180,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }

  @media (max-width: 950px) {
    font-size: 0.8rem;
    margin: 0;
  }
`
