import styled  from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  width: 100%;
  margin: 36px 0;
  padding: 0 124px;


  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 4px;
      padding: 12px 32px;

      border-radius: 8px;
      border: none;

      background-color: ${({ theme }) => theme.COLORS.PINK};

      svg {
        width: 22px;
        height: 22px;
      }
    }

    h2 {
      font-size: 32px;
      font-weight: 400;
    }
  }
`;