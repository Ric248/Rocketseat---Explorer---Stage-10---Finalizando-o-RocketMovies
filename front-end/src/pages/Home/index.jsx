import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { api } from '../../services/api';

import { Container, Content } from './styles';

import { Note } from '../../components/Note';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

export function Home() {
  const [searsh, setSearsh] = useState([]);
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  function handleNew() {
    navigate("/new");
  }
  
  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movie_tags");
      setTags(response.data)
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${searsh}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [searsh]);

  return (
    <Container>

      <Header />

      <Content>
        <div>
          <h2>Meus filmes</h2>
          <button onClick={handleNew}><FiPlus />Adicionar filme</button>
        </div>
        <Section>
          {notes.map(note => (<Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />))}
        </Section>
      </Content>
    </Container>
  );
}