import P from 'prop-types';

import * as Styled from './styles';
import * as Yup from 'yup';
import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../../components/TextError';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { authenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    login(values.email, values.password);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Formato de e-mail inválido')
      .required('E-mail é obrigatório'),
    password: Yup.string().required(
      'Password é obrigatório',
    ),
  });

  if (authenticated) return navigate('/user');

  return (
    <Styled.Container>
      <h1 style={{ marginBottom: '20px' }}>
        Entre com sua conta
      </h1>
      <Styled.FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Styled.Field>
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Insira seu e-mail"
              />
              <ErrorMessage
                name="email"
                component={TextError}
              />
            </Styled.Field>

            <Styled.Field>
              <label htmlFor="password">Senha:</label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Insira sua senha"
              />
              <ErrorMessage
                name="password"
                component={TextError}
              />
            </Styled.Field>
            <Styled.FormFooter>
              <button
                type="submit"
                className="styled-button"
              >
                {' '}
                Entrar
              </button>
              <p>
                {`Não possui conta? `}{' '}
                <a href="/register">Registrar</a>{' '}
              </p>
            </Styled.FormFooter>
          </Form>
        </Formik>
      </Styled.FormContainer>
    </Styled.Container>
  );
};
