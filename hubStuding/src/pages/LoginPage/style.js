import styled from "styled-components";

export const StyledContainerForm = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  img {
    padding: 32px 12px;
  }

  body {
    overflow-x: hidden;
    height: 100%;
  }

  main {
    background: #121214;
    color: #ffff;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 38px;
    overflow-x: hidden;
  }

  h2 {
    font-size: 10px;
    font-weight: normal;
  }

  form {
    background-color: #212529;
    display: flex;

    padding: 42px 22px;
    gap: 22px;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 20rem;
    height: 35px;

    text-align: center;
  }

  button {
    width: 20rem;
    background: #ff577f;
    height: 44px;
    color: #ffff;
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
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    overflow: hidden;

    form {
      padding: 30px 16px;
      max-width: 300px;
    }

    input {
      max-width: 14rem;
    }

    button {
      max-width: 14rem;
    }
  }
`;

export const StyledSecondButton = styled.button`
  background: #2fff;
  height: 44px;
  width: 17rem;
`;
