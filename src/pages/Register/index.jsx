import P from 'prop-types';

import * as Styled from '../Login/styles';
import * as Yup from 'yup';
import React, { useContext } from 'react';

import { AuthContext } from '../../context/authContext';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextError } from '../../components/TextError';
import { createUser } from '../../services/createUser';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { authenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    name: '',
    password: '',
    confirmpassword: '',
  };

  const onSubmit = async (values) => {
    await createUser(values);
    await login(values.email, values.password);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Formato de e-mail inválido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required(
      'A senha é obrigatória',
    ),
    confirmpassword: Yup.string()
      .oneOf(
        [Yup.ref('password'), ''],
        'As senhas devem ser iguais',
      )
      .required('Confirmar sua senha é obrigatório'),
  });

  if (authenticated) return navigate('/user');

  return (
    <Styled.Container>
      <h1 style={{ marginBottom: '20px' }}>
        Faça seu cadastro
      </h1>
      <Styled.FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <Styled.Field>
              <label htmlFor="name">Nome:</label>
              <Field
                id="name"
                name="name"
                type="name"
                placeholder="Insira seu nome"
              />
              <ErrorMessage
                name="name"
                component={TextError}
              />
            </Styled.Field>
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
            <Styled.Field>
              <label htmlFor="password">
                Confirme sua senha:
              </label>
              <Field
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                placeholder="Repita sua senha"
              />
              <ErrorMessage
                name="confirmpassword"
                component={TextError}
              />
            </Styled.Field>
            <Styled.FormFooter>
              <button
                type="submit"
                className="styled-button"
              >
                {' '}
                Cadastrar
              </button>
              <p>
                Já possui cadastro?{' '}
                <a href="/login">Entrar</a>{' '}
              </p>
            </Styled.FormFooter>
          </Form>
        </Formik>
      </Styled.FormContainer>
    </Styled.Container>
  );
};
