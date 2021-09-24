import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

import { Container } from '../styles/Layout';

export const Header = () => (
  <WrapperHeader>
    <Container
      display='flex'
      flexDirection='row'
      alignItems='flex-end'
      justifyContent='space-between'
    >
      <h1>Logo</h1>
      <button>
        <FiMenu size={20} />
      </button>
    </Container>
  </WrapperHeader>
);

const WrapperHeader = styled.header`
  height: 140px;
  background-color: #f4f4f4;
  color: #2957a3;
  border-bottom: 4px solid #fab734;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 28px;
    height: 28px;
    padding: 4px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #2957a3;

    transition: all 1s;

    &:hover{
      background-color: #ddd;
      transition: all 1s;
    }
  }
`;
