import styled from '@emotion/styled';
import { CssBaseline } from '@mui/material';

import PokemonFilter from './components/PokemonFilter';
import PokemonInfo from './components/PokemonInfo';
import PokemonTable from './components/PokemonTable';

import store from './store';

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

  if (!store.pokemon) {
    return <div>Loading data</div>;
  }

  return (
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
  );
}

export default App;
