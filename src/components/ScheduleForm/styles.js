import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, display }) => css`

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.50);
  position: absolute;
  display: ${display ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
  width: 360px;
  display: flex;
  aspect-ratio: 1/1;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);
  border-radius: 10px;
  padding: 20px;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  height: 100px;
  gap: 80px;
  justify-content: center;
  align-items: center;
  `}
`;

export const Field = styled.div`
  ${({ theme }) => css`
  display: flex;

  flex-direction: column;
  padding: 10px;

  label {
    font-size: 18px;
  }


  input, select {
    height: 33px;
    width: 50%;
    border-radius: 5px;
  }


  `}
`;
