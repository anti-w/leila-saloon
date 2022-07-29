import { About } from '../../components/About';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import * as Styled from './styles';

export const Home = () => {
  return (
    <Styled.Container>
      <Header />
      <About />
      <Footer />
    </Styled.Container>
  );
};
