import styled from "styled-components";

export const StyledModalUpdate = styled.div`
  width: 369px;
  height: 342px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  form p {
    color: white;
  }
  form label {
    color: white;
  }
  form input {
    color: white;
    background-color: #343b41;
    border: 1.2px solid #f8f9fa;
    border-radius: 4px;
    width: 264.66px;
    height: 38.5px;
    font-size: 1rem;
  }

  form select {
    color: white;
    background-color: #343b41;
    border: 1.2px solid #f8f9fa;
    border-radius: 4px;
    width: 264.66px;
    height: 38.5px;
    font-size: 1rem;
  }
  .HeaderModalTech {
    display: flex;
    width: 369px;
    height: 50px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    align-items: center;
    justify-content: space-around;
  }
  .closeBtn {
    background: #343b41;
    color: white;
    width: 20px;
    height: 20px;
  }
  input {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  select {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .f5tech {
    width: 140px;
    height: 48px;
    background: #59323f;
    color: white;
    border-radius: 4px;
  }
  .DelTech {
    width: 90px;
    height: 48px;
    background: #7f8285;
    color: white;
    border-radius: 4px;
  }
  .BtnsFoModaloter {
    gap: 5px;
  }
`;
