import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  background:  ${theme.colors.menu.background};
  padding: 10px;
  overflow: hidden;

  `}
`;
export const MenuSideBar = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100vw;
  padding: 10px;
  box-shadow: 4px 9px 10px -2px rgba(0,0,0,0.54);
  border-radius: 10px;
  `}
`;
export const Schedules = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background:  ${theme.colors.menu.background};


  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  background:  ${theme.colors.menu.background};
  overflow: hidden;

  `}
`;