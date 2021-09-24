import styled from 'styled-components';
import { Container } from '../styles/Layout';

export const Header = () => (
  <WrapperHeader>
    <Container display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
      <h1>Logo</h1>
      <button>menu</button>
    </Container>
  </WrapperHeader>
);

const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
