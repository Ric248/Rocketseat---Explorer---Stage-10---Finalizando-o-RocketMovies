import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Brand, Search } from "./styles";

import { Input } from '../../components/Input';

export function Header() {
  const [searsh, setSearsh] = useState([]);

  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  function handleProfile() {
    navigation("/profile");
  }

  function handleSubmit() {
    navigation(`/?title=${searsh}`);
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Pesquisar pelo título" onChange={(e) => setSearsh(e.target.value)} />
        </form>
      </Search>

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <a onClick={handleSignOut}>Sair</a>
        </div>

        <img src={avatarUrl} alt={user.name} onClick={handleProfile} />
      </Profile>

    </Container>
  )
}