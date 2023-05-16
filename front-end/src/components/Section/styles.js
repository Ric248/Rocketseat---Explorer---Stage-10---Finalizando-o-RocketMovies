import styled from "styled-components";

export const Container = styled.section`
  height: clamp(50vh, 100vh - 280px, 100vh);
  margin: 28px 0;
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
`;