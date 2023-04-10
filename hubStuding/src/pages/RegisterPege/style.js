import styled from "styled-components";

export const StyledContainerForm = styled.div`
  body {
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
  }

  header {
    background: #121214;
    padding: 18px 0px 13px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  main {
    background: #121214;
    color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 38px;
    min-height: 100vh;
  }

  form {
    background-color: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 13px;
    font-size: 0.6rem;
    width: 370px;
    div {
      gap: 12px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    max-width: 100%;
  }

  input {
    gap: 10px;
    padding: 8px;
    width: 20rem;
    height: 40px;
    text-align: center;
    max-width: 100%;
    background: #343b41;
  }

  button {
    width: 15rem;
    background: #ff577f;
    height: 44px;
    color: #ffff;
    max-width: 100%;
    cursor: pointer;
  }
  .secondBtn {
    background: #616161;
    height: 44px;
    width: 20rem;
    align-items: center;
    display: flex;
    justify-content: center;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    form {
      width: 80%;
    }
  }
`;
