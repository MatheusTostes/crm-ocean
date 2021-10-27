import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  width: 100vw;
  border-radius: 8px;
  margin: 1.1vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 10px rgba(184, 206, 239, 0.6);

  h3 {
    margin: 1.1vw 0;
    width: 96%;
  }
`
export const Table = styled.table`
  width: 100%;
  margin: 0 0 1.5% 0; 
  border-collapse: collapse;
  
  @media (max-width: 1100px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  h4, h5 {
    margin: 0 20px;
  }

  h5 {
    color: rgba(0, 0, 0, 0.6);
  }

  .client-div {
    margin: 0 20px;
    display: flex;
    align-items: center;
  }
  
  .payment-edit-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  th {
    background-color: rgb(250,250,250);
    text-align: start;
    font-size: 0.9rem; 
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); 
  }

  tr {
    background-color: transparent;
    border-color: red;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  td {
    height: 45px;
  }

  img {
    background: -webkit-linear-gradient(270deg, rgba(7,159,255,0.3) 0%, rgba(26,244,180,0.3) 100%);
    height: 100%;
    width: 30px;
    padding: 1px;
    border-radius: 50px;
    margin-right: -10px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-left: 2px;
  }

  .action-button {
    width: 15px;
    opacity: 0.7;
  }

  .actions-div {
    margin-right: 20px;
    display: flex;
    flex-wrap: nowrap;
  }
`