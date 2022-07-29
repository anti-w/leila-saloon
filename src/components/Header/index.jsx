import { Butterfly } from 'phosphor-react';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Container>
      <Butterfly size={42} />
      <Styled.Links>
        <a>Sobre nós</a>
        <a>Nosso Blog</a>
        <a>Contato</a>
      </Styled.Links>
    </Styled.Container>
  );
};
