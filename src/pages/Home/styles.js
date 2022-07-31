import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background:  ${theme.colors.menu.background};
    overflow: auto;
  `}

`;
