import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background:  ${theme.colors.menu.background};
    overflow: hidden;
  `}

`;
