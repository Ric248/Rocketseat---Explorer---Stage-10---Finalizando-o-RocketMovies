import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  text-align: left;

  > h1 {
    flex: 1;
    margin-bottom: 8px;

    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > span {
    font-size: 18px;
    gap: 6px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    height: 44px;
    margin-top: 8px;
    overflow-y: hidden;

    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
  }
`;