import * as Styled from './styles';
import 'react-datepicker/dist/react-datepicker.css';
import P from 'prop-types';

import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';

import {
  Calendar,
  HouseLine,
  Trash,
  UserCircle,
} from 'phosphor-react';
import { ScheduleForm } from '../../components/ScheduleForm';
import { listSchedules } from '../../services/listSchedules';
import { deleteSchedule } from '../../services/deleteSchedule';

const difBetweenDates = (date) => {
  var today = new Date().getTime();
  var timeDiff = Math.abs(today - date);
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  if (diffDays <= 2) return true;
};

export const User = () => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState('schedules');
  const [presentSchedules, setPresentSchedules] = useState(
    [],
  );
  const [pastSchedules, setPastSchedules] = useState([]);

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
        data: { presentSchedules, pastSchedules },
      } = await listSchedules();

      setPresentSchedules(presentSchedules);
      setPastSchedules(pastSchedules);
    })();
  }, [presentSchedules]);

  presentSchedules.map((schedule) => {
    schedule.date = new Date(schedule.date);
  });
  pastSchedules.map((schedule) => {
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
        <Styled.Navigator>
          <button
            className={
              selectedMenuItem === 'schedules'
                ? 'styled-button selected'
                : 'styled-button'
            }
            onClick={() => setSelectedMenuItem('schedules')}
          >
            Horários
          </button>
          <button
            className={
              selectedMenuItem === 'history'
                ? 'styled-button selected'
                : 'styled-button'
            }
            onClick={() => setSelectedMenuItem('history')}
          >
            Histórico
          </button>
          <Link to="/" className="home-icon">
            <HouseLine size={32} color="white" />
          </Link>
        </Styled.Navigator>
        <Styled.UserArea>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <UserCircle size={50} />
            <h3>{user.name}</h3>
          </div>
          <button
            className="styled-button"
            onClick={logout}
          >
            Sair
          </button>
        </Styled.UserArea>
      </Styled.MenuSideBar>
      <Styled.Content>
        {selectedMenuItem == 'schedules' && (
          <Styled.Schedules>
            <h1>Lista de horários</h1>
            <Styled.NewScheduleIcon>
              <h2>Agendar novo horário</h2>
              <button
                className="new-schedule"
                onClick={() => setDisplayScheduleForm(true)}
              >
                <Calendar size={40} />
              </button>
            </Styled.NewScheduleIcon>
            {presentSchedules.map((item) => (
              <Styled.ScheduleCard key={item._id}>
                <span>
                  {item.date.toLocaleDateString()}
                </span>
                <span>
                  {item.date.toLocaleTimeString()}
                </span>
                <span className="service">
                  {item.service}
                </span>
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
                <button
                  className="trash-icon"
                  onClick={() => deleteSchedule(item._id)}
                >
                  <Trash size={30} />
                </button>
              </Styled.ScheduleCard>
            ))}
          </Styled.Schedules>
        )}

        {selectedMenuItem == 'history' && (
          <Styled.Schedules>
            <h1>Histórico de horários</h1>
            {pastSchedules.map((item) => (
              <Styled.ScheduleCard key={item._id}>
                <span>
                  {item.date.toLocaleDateString()}
                </span>
                <span>
                  {item.date.toLocaleTimeString()}
                </span>
                <span className="service">
                  {item.service}
                </span>
              </Styled.ScheduleCard>
            ))}
          </Styled.Schedules>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};
