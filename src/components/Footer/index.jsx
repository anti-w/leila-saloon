import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.NinjaAndText>
        <p>
          Desenvolvido utilizando as artes secretas ninja.{' '}
        </p>
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/toss-face/331/ninja_1f977.png"
          width={40}
        />
      </Styled.NinjaAndText>

      <Styled.Icons>
        <a
          href="https://github.com/anti-w"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size={36} color="white" />
        </a>
        <a
          href="https://linkedin.com/in/anti-w"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinLogo size={36} color="white" />
        </a>
      </Styled.Icons>
    </Styled.Container>
  );
};
