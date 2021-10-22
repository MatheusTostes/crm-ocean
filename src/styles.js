import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  background-color: #eff5ff;
`
export const Content = styled.div`
  margin-left: 250px;
  width: 100%;
  padding: 2%;

  @media (max-width: 1000px) {
    margin-left: 0;
  }
`