import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px 0 20px 0;
  max-width: 70vw;
  min-height: 100vh;
  justify-content: space-evenly;
  align-items: center;

  > header {
    color: #333;
  }
  > footer {
    color: blue;
  }
`
