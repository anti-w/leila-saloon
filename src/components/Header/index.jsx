import { Butterfly } from 'phosphor-react';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <Butterfly size={42} />
      <Styled.Links>
        <a href="/login">Entrar</a>
        <a href="/register">Cadastrar</a>
      </Styled.Links>
    </Styled.Container>
  );
};
