import { Butterfly } from 'phosphor-react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <Butterfly size={42} />
      <Styled.Links>
        <Link to="/login">Entrar</Link>
        <Link to="/register">Cadastrar</Link>
      </Styled.Links>
    </Styled.Container>
  );
};
