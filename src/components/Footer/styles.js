import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`

  justify-content: space-between;
  align-items: center;
  display: flex;
  width: 100%;
  height: 80px;

  `}
`;

export const NinjaAndText = styled.div`
  ${({ theme }) => css`

  justify-content: flex-start;
  align-items: center;
  display: flex;
  width: 40%;
  gap: 20px;
  margin-left: 20px;

  `}
`;

export const Icons = styled.div`
  ${({ theme }) => css`

  align-items: center;
  justify-content: flex-end;
  display: flex;
  width: 40%;
  gap: 40px;
  margin-right: 20px;

  a {
    display: flex;
    border-radius: 10px;
    justify-content: center;
    padding: 5px
  }

  a:hover {
    background: ${theme.colors.menu.primary};
  }

  `}
`;
