import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;

  background-color: ${({ theme, disabled }) => disabled ? theme.COLORS.BLACK : theme.COLORS.PINK };
  color: ${({ theme, disabled }) => disabled ? theme.COLORS.PINK : theme.COLORS.BLACK };

  height: 56px;
  border: 0;
  padding: 0, 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;