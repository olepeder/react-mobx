import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

import PokemonContext from './PokemonContext';

import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

import './App.css';

const Title = styled.h1`
  text-align: center
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {
  const [filter, filterSet] = useState("");
  const [pokemon, pokemonSet] = useState([]);
  const [selectedPokemon, selectedPokemonSet] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  if (!pokemon) {
    return <div>Loading data</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        filterSet,
        pokemon,
        pokemonSet,
        selectedPokemon,
        selectedPokemonSet
      }}
    >
      <PageContainer>
        <CssBaseline />
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>
      </PageContainer>
    </PokemonContext.Provider>
  );
}

export default App;
