import * as Styled from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import P from 'prop-types';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';

import { Plus, UserCircle } from 'phosphor-react';
import { ScheduleForm } from '../../components/ScheduleForm';
import { listSchedules } from '../../services/listSchedules';

const difBetweenDates = (date) => {
  var today = new Date().getTime();
  var timeDiff = Math.abs(today - date);
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (diffDays <= 2) return true;
};

export const User = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState('schedules');
  const [userSchedules, setUserSchedules] = useState([]);

  const [displayScheduleForm, setDisplayScheduleForm] =
    useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [scheduleId, setSheduleId] = useState('');

  const { logout, authenticated } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const {
        data: { schedules },
      } = await listSchedules();

      setUserSchedules(schedules);
    })();
  }, [userSchedules]);

  userSchedules.map((schedule) => {
    schedule.date = new Date(schedule.date);
  });

  if (!authenticated) return navigate('/login');

  return (
    <Styled.Container>
      <ScheduleForm
        displayForm={displayScheduleForm}
        setDisplayForm={setDisplayScheduleForm}
        isUpdating={isUpdating}
        scheduleId={scheduleId}
        setIsUpdating={setIsUpdating}
      />
      <Styled.MenuSideBar>
        <button
          className="styled-button"
          onClick={() => setSelectedMenuItem('schedules')}
        >
          Horários
        </button>
        <button
          className="styled-button"
          onClick={() => setSelectedMenuItem('history')}
        >
          Histórico
        </button>
        <UserCircle size={50} />
        <h3>{user.name}</h3>

        <button className="styled-button" onClick={logout}>
          Sair
        </button>
      </Styled.MenuSideBar>
      <Styled.Content>
        {selectedMenuItem == 'schedules' && (
          <Styled.Schedules>
            <h1>Lista de horários</h1>
            <button
              className="styled-button"
              onClick={() => setDisplayScheduleForm(true)}
            >
              <Plus />
            </button>
            {userSchedules.map((item) => (
              <Styled.ScheduleCard key={item._id}>
                <span>
                  {item.date.toLocaleDateString()}
                </span>
                <span>
                  {item.date.toLocaleTimeString()}
                </span>
                <span>{item.service}</span>
                <button
                  className="styled-button"
                  onClick={() => {
                    setDisplayScheduleForm(true);
                    setIsUpdating(true);
                    setSheduleId(item._id);
                  }}
                  disabled={difBetweenDates(
                    item.date.getTime(),
                  )}
                >
                  Alterar horário
                </button>
                <button className="styled-button">
                  Cancelar horário
                </button>
              </Styled.ScheduleCard>
            ))}
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
