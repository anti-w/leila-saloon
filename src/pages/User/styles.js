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
  align-items: center;
  width: 100%;
  padding: 5px 40px;
  box-shadow: 4px 9px 10px -2px rgba(0,0,0,0.54);
  border-radius: 10px;
  `}
`;

export const Navigator = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 50px;

  .selected {
    background: ${theme.colors.menu.primary};
    border-color: ${theme.colors.menu.primary};
  }


  `}
`;

export const UserArea = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  gap: 40px;


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

  `}
`;
export const NewScheduleIcon = styled.div`
  ${({ theme }) => css`

    position: absolute;
    display: flex;
    flex-direction: column;
    gap:15px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    top: 100px;
    right: 130px;
    color: white;
    font-weight: bolder;

    button {
      display: flex;
      cursor: pointer;
      background:  ${theme.colors.menu.primary};
      color: white;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 10px;
      border: 2px solid ${theme.colors.menu.primary};
    }

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
export const ScheduleCard = styled.div`
  ${({ theme }) => css`
  display: flex;
  color: white;
  flex-direction: row;
  margin-block: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border: 2px solid gray;
  gap: 20px;
  height: 80px;
  background:  ${theme.colors.menu.background};
  overflow: hidden;
  border-radius: 10px;

  .service {
    min-width: 160px;
    text-align: center;
  }


  .trash-icon {
    display: flex;
    cursor: pointer;
    background: transparent;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: black;
    border-radius: 10px;
    border: none
  }

  .trash-icon:hover{
    color: white;
    background:  ${theme.colors.menu.primary};

  }

  `}
`;
