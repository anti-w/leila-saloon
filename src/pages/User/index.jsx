import * as Styled from './styles';
import P from 'prop-types';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';

import { Plus, UserCircle } from 'phosphor-react';
import { ScheduleForm } from '../../components/ScheduleForm';

export const User = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState('schedules');

  const [displayScheduleForm, setDisplayScheduleForm] =
    useState(false);

  const { user, logout, authenticated } =
    useContext(AuthContext);
  const navigate = useNavigate();

  if (!authenticated) return navigate('/login');

  return (
    <Styled.Container>
      <ScheduleForm
        display={displayScheduleForm}
        setDisplay={setDisplayScheduleForm}
      />
      <Styled.MenuSideBar>
        <button
          onClick={() => setSelectedMenuItem('schedules')}
        >
          Horários
        </button>
        <button
          onClick={() => setSelectedMenuItem('history')}
        >
          Histórico
        </button>
        <UserCircle size={50} />
        <h3>{user.name}</h3>

        <button onClick={logout}>Sair</button>
      </Styled.MenuSideBar>
      <Styled.Content>
        {selectedMenuItem == 'schedules' && (
          <Styled.Schedules>
            <h1>Lista de horários</h1>
            <button
              onClick={() => setDisplayScheduleForm(true)}
            >
              <Plus />
            </button>
          </Styled.Schedules>
        )}
        {selectedMenuItem == 'history' && (
          <Styled.Schedules>
            <h1>Histórico de horários</h1>
          </Styled.Schedules>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};
