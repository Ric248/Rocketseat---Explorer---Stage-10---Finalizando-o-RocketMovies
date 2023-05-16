import { Container } from "./styles";

export function Button({ title, loadng = false, ...rest }) {

  return(
    <Container type="button" disabled={loadng} {...rest}> 
      {loadng ? 'Carregando...' : title}
    </Container>
  );
}