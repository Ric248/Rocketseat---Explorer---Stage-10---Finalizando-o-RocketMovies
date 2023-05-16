import { Container } from './styles';
import { Tag } from '../Tag';

export function Note({ data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <span>{"★ ".repeat(Number(data.rating))} {"☆ ".repeat(5 - Number(data.rating))}</span>
      <p>{data.description}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}