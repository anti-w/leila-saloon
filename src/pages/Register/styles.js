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
  font-size: 1.8rem;

  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
  width: 42rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aspect-ratio: 1.5/1;
  box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);
  border-radius: 10px;
  padding: 4rem 1.5rem;
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  `}
`;

export const FormFooter = styled.div`
  ${({ theme }) => css`
  display: flex;
  margin-top: 2rem;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  `}
`;
export const Field = styled.div`
  ${({ theme }) => css`
  display: block;
  padding: 0 1rem;
  margin-block: 2rem;

  label, input {
    display: block;
  }

  input {
    height: 3.3rem;
    width: 100%;
    border-radius: 5px;
    margin-top: 0.3rem;
  }


  `}
`;
