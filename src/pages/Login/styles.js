import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background:  ${theme.colors.menu.background};
  overflow: hidden;
  font-size: 18px;

  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aspect-ratio: 1.5/1;
  box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);
  border-radius: 10px;
  padding: 40px 15px;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
  margin-top: 10px;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  `}
`;

export const FormFooter = styled.div`
  ${({ theme }) => css`
  display: flex;
  margin-block: 20px;
  gap: 3rem;
  justify-content: center;
  align-items: center;

  button {
    border-style: none;
    min-width: 100px;
    padding: 14px;
    text-align: center;
    background: transparent;
    border: 2px solid gray;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }
  `}
`;
export const Field = styled.div`
  ${({ theme }) => css`
  display: block;
  padding: 0 10px;
  margin-block: 20px;

  label, input {
    display: block;
  }

  label {
    font-size: 20px;
  }

  input {
    height: 33px;
    width: 100%;
    border-radius: 5px;
    margin-top: 3px;
  }


  `}
`;
