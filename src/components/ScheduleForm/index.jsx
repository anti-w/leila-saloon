import P from 'prop-types';
import * as Styled from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import React, { useContext, useState } from 'react';

import { X } from 'phosphor-react';

import { AuthContext } from '../../context/authContext';

import { Controller, useForm } from 'react-hook-form';
import { TextError } from '../TextError';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

const saloonServices = [
  {
    type: 'Corte',
    estimatedTime: '1 Hora',
  },
  {
    type: 'Lavação',
    estimatedTime: '30 minutos',
  },
  {
    type: 'Tintura',
    estimatedTime: '1 Hora',
  },
  {
    type: 'Tratamento Capilar',
    estimatedTime: '1 Hora e 30 minutos',
  },
  {
    type: 'Alisamento',
    estimatedTime: '1 Hora',
  },
  {
    type: 'Progressiva',
    estimatedTime: '2 Horas',
  },
  {
    type: 'Mechas',
    estimatedTime: '1 Hora',
  },
  {
    type: 'Luzes',
    estimatedTime: '1 Hora',
  },
  {
    type: 'Reflexos',
    estimatedTime: '1 Hora',
  },
  {
    type: 'Manicure',
    estimatedTime: '30 minutos',
  },
  {
    type: 'Pedicure',
    estimatedTime: '30 minutos',
  },
  {
    type: 'Manicure e Pedicure',
    estimatedTime: '1 Hora',
  },
];

const inactiveHours = [
  new Date().setHours(0, 0, 0),
  new Date().setHours(1, 0, 0),
  new Date().setHours(2, 0, 0),
  new Date().setHours(3, 0, 0),
  new Date().setHours(4, 0, 0),
  new Date().setHours(5, 0, 0),
  new Date().setHours(6, 0, 0),
  new Date().setHours(7, 0, 0),
  new Date().setHours(12, 0, 0),
  new Date().setHours(13, 0, 0),
  new Date().setHours(19, 0, 0),
  new Date().setHours(20, 0, 0),
  new Date().setHours(21, 0, 0),
  new Date().setHours(22, 0, 0),
  new Date().setHours(23, 0, 0),
];
const filterPassedTime = (time) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);

  return currentDate.getTime() < selectedDate.getTime();
};

const isWeekDay = (date) => {
  const day = date.getDay();
  if (day === 0) return false;
  else return true;
};
export const ScheduleForm = ({ display, setDisplay }) => {
  const validationSchema = Yup.object({
    service: Yup.string().required('Escolha o serviço'),
    selectedDate: Yup.date().required('Escolha o dia'),
  });

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Styled.Container display={display}>
      <h1 style={{ marginBottom: '20px' }}>
        Agendar um horário
      </h1>
      <Styled.FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Field>
            <label htmlFor="service">
              Serviço desejado:
            </label>
            <select {...register('service')}>
              {saloonServices.map((service) => {
                return (
                  <option
                    value={service.type}
                    key={service.type}
                  >
                    {service.type}
                  </option>
                );
              })}
            </select>
            {errors.service && (
              <TextError>
                {errors.service.message}
              </TextError>
            )}
          </Styled.Field>
          <Styled.Field>
            <label htmlFor="selectedDate">Dia:</label>
            <Controller
              control={control}
              name="selectedDate"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Escolha uma data"
                  onChange={(date) => field.onChange(date)}
                  showTimeSelect
                  minDate={new Date()}
                  timeIntervals={60}
                  filterTime={filterPassedTime}
                  filterDate={isWeekDay}
                  excludeTimes={inactiveHours}
                  timeFormat="HH:mm"
                  timeCaption="Horários"
                  selected={field.value}
                  dateFormat="d MMMM, yyyy h:mm aa"
                />
              )}
            />
            {errors.selectedDate && (
              <TextError>
                {errors.selectedDate.message}
              </TextError>
            )}
          </Styled.Field>
          <Styled.ButtonContainer>
            <button type="submit">Agendar</button>
            <button onClick={() => setDisplay(false)}>
              <X />
            </button>
          </Styled.ButtonContainer>
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

ScheduleForm.propTypes = {
  display: P.bool.isRequired,
  setDisplay: P.func.isRequired,
};
