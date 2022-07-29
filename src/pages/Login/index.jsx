import { useState } from 'react';
import * as Styled from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Styled.Container>
      <h1>Login</h1>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Field>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Styled.Field>
        <Styled.Field>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Styled.Field>
        <Styled.ButtonContainer>
          <button type="submit">Entrar</button>
          <button type="submit">Registrar</button>
        </Styled.ButtonContainer>
      </Styled.Form>
    </Styled.Container>
  );
};
