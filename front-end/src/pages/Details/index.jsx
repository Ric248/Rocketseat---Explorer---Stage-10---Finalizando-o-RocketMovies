import { FiArrowLeft } from 'react-icons/fi';
import { TfiTime } from 'react-icons/tfi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { useState, useEffect } from 'react';
import { Container, Content } from './styles';
import { useParams, useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate(null);

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm) {
      await api.delete(`/movie_notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [])

  return (
    <Container>
      <Header />

      <main>
        { data &&
          <Content>
            <div className="box">
              <header>
                <Link to="/"><FiArrowLeft /> Voltar</Link>
                <h1>{data.title} <span> {"★ ".repeat(Number(data.rating))} {"☆ ".repeat(5 - Number(data.rating))}</span></h1>
              </header>

              <p><span><TfiTime /></span>{data.created_at}</p>

              { data.tags &&
                <Section title="Marcadores">
                  {data.tags.map(tag => (<Tag key={String(tag.id)} title={tag.name} />))}
                </Section>
              }

              <p>{data.description}</p>
            </div>
          </Content>
        }
      </main>
    </Container>
  )
}