import P from 'prop-types';
import * as Styled from './styles';

export const TextError = ({ children }) => {
  return <Styled.SpanError>{children}</Styled.SpanError>;
};

TextError.propTypes = {
  children: P.node.isRequired,
};
