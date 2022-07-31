import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`

  display: flex;
  width: 100%;
  height: 70px;
  padding: 5px 20px;
  border-bottom: 1px solid gray;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  `}
`;

export const Links = styled.div`
  ${({ theme }) => css`

  display: flex;
  gap: 30px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;

  `}
`;
