import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`

  display: flex;
  width: 100%;
  height: 5rem;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;

  `}
`;

export const Links = styled.header`
  ${({ theme }) => css`

  display: flex;
  gap: 2rem;
  width: 30rem;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  `}
`;
