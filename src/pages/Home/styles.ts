import styled from 'styled-components/native';

export const Body = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.gray};
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
