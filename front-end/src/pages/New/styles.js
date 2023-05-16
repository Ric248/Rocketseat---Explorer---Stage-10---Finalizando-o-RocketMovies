import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > main {
    width: 100%;
    padding: 0 124px;
    overflow-y: auto;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .entry {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    gap: 24px;
    padding: 16px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

`;

export const Form = styled.div`
  margin: 40px auto;

  > header {
    display: flex;
    flex-direction: column;

    margin-bottom: 36px;

    a {
      font-size: 16px;
      margin-bottom: 24px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > Section {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;