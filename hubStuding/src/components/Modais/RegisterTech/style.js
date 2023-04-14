import styled from "styled-components";

export const StyledModal = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;

  background-color: #343b41;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

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
    background-color: #3d3d3d;

    border: 1.2px solid #f8f9fa;
    border-radius: 4px;
    width: 264.66px;
    height: 38.5px;
    font-size: 1rem;
  }

  form select {
    color: white;
    background-color: #3d3d3d;

    border: 1.2px solid #f8f9fa;
    border-radius: 4px;
    width: 264.66px;
    height: 38.5px;
    font-size: 1rem;
  }
  .HeaderModalTech {
    padding-top: 0px;
    display: flex;
    width: 369px;
    height: 50px;
    background-color: #3d3d3d;
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
  button[type="submit"],
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: #ff577f;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  button[type="submit"] {
    margin-top: 20px;
  }

  p {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  button:nth-of-type(1) {
    margin-right: 10px;
  }

  button:nth-of-type(2) {
    margin-right: 10px;
  }
`;
