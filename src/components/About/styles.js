import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  img {
    aspect-ratio: 1/1;
    width: 30rem;
  }

  h1 {
    font-size: 2.2rem
  }

  p {
    font-size: 1.6rem;
    text-align: center;
  }

  `}
`;
