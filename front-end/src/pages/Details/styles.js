import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > main {
    width: 100%;
    padding: 0 124px;

    .box {
      height: clamp(50vh, 100vh - 190px, 100vh);
      overflow-y: auto;
      scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
    }
  }
`;

export const Content = styled.div`

  .box {
    margin: 40px auto;

    > header {
      display: flex;
      flex-direction: column;

      a {
        font-size: 16px;
        margin-bottom: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }

      h1 {
        font-size: 36px;
        margin-bottom: 24px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      span {
        font-size: 28px;
        margin-bottom: 24px;
        margin-left: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    > Section {
      height: auto;
      padding: 4px 0;

      span {
        background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT};
      }
    }

    > p {
      img {
        width 16px;
        height: 16px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}
      }

      span {
        margin-right: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`;