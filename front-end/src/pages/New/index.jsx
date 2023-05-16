import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { FiArrowLeft } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Link } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Form,  } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("0");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      alert("Digite o título do filme.");
    }

    if(!rating) {
      alert("Digite uma nota válida para o filme.");
    }

    if(newTag) {
      alert("Há uma tag não adicionada no campo.");
    }

    await api.post("/movie_notes", {title, description, tags, rating});

    alert("Filme adicionado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link onClick={handleBack}><FiArrowLeft /> Voltar</Link>
            <h1>Novo filme</h1>
          </header>

          <Section>
            <div className="entry">
              <Input placeholder="Título" onChange={e => setTitle(e.target.value)} />
              <Input placeholder="Sua nota (de 0 a 5)" onChange={e => setRating(e.target.value)} />
            </div>
            <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

            <h2>Marcadores</h2>
            <div className="tags">
              {
                tags.map((tag, index) => (<NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />))
              }
              <NoteItem isNew placeholder="Nova tag" onChange={e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag} />
            </div>

            <div className="buttons">
              <Button disabled title="Excluir filme" />
              <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>
          </Section>
        </Form>
      </main>
    </Container>
  );
}