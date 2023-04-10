import styled from "styled-components";

const StyledHome = styled.main`
  background: #121214;
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  height: auto;
  justify-content: flex-start;

  header {
    background: #121214;
    padding: 57px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .infoTechUser {
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: center;

    ul {
      background-color: #343b41;
      width: 55%;
      padding: 30px 0px;
      gap: 10px;
      border-radius: 4px;
      display: grid;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      justify-items: center;
    }

    li {
      padding: 15px;
      border-radius: 4px;
      background: #121214;
      width: 90%;
      height: 60px;
      gap: 410px;
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
    }
    div {
      display: flex;
      padding: 2px;
      gap: 10px;
      align-items: center;
    }
    img {
      width: 20px;
    }
  }

  span {
    background-color: #121214;
    border-radius: 4px;
    border: 1px solid #f7f7f7;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 12px;
    text-decoration: none;
  }

  button {
    width: 17rem;
    height: 44px;
    color: #ffff;
    background: #ff577f;
  }

  .secondBtn {
    height: 44px;
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #212529;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
  input {
    width: 20rem;
    height: 35px;

    text-align: center;
  }

  .infoUser {
    padding: 57px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid whitesmoke;
  }

  .showModal {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 57px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .registerTech {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
  }

  html,
  body {
    margin: 0 auto;
    padding: 0 auto;
    height: 100%;
  }
`;

export default StyledHome;
