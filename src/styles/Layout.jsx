import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  display: ${(props) => props.display || `block`};
  flex-direction: ${(props) => props.flexDirection || `unset`};;
  align-items:  ${(props) => props.alignItems || `unset`};;
  justify-content:  ${(props) => props.justifyContent || `unset` };;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
