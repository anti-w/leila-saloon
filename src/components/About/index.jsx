import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import * as Styled from './styles';

export const About = () => {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    if (authenticated) return navigate('/user');
    else return navigate('/login');
  };

  return (
    <Styled.Container>
      <h1>Bem vinds ao Cabeleleila Leila Salão de Beleiza </h1>
      <Styled.FlexImages>
        <img src="https://marciatravessoni.com.br/wp-content/uploads/2021/09/Ida-Axenstedt-1.jpg" />
        <img src="https://marciatravessoni.com.br/wp-content/uploads/2021/09/jf-beauty-1.jpg" />
      </Styled.FlexImages>

      <p>
        Nossa equipe está preparada para lhe atender da melhor forma possível,
        afinal de contas a Cabeleleila Leila existe para transformar a sua
        autoestima e dar brilho para o que você tem de melhor. VOCÊ!
      </p>
      <button onClick={handleScheduleClick}>Agende seu horário</button>
    </Styled.Container>
  );
};
