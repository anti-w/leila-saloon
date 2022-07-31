import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  width: 100%;
  height: 100vh;
  gap: 50px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    aspect-ratio: 1/1;
    width: 300px;
  }

  p {
    font-size: 24px;
    width: 600px;
    text-align: center;
    color: whitesmoke
  }

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

export const FlexImages = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;

  `}
`;
