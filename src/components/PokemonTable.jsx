import React from 'react';
import PokemonRow from './PokemonRow';
import styled from '@emotion/styled';
import store from '../store';
import { observer } from 'mobx-react';

const Th = styled.th`
  text-align: left;
  font-size: x-large;
`;

const PokemonTable = () => {


  return (
    <table width="100%">
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Type</Th>
        </tr>
      </thead>
      <tbody>
        {store.filteredPokemon
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>);
};

export default observer(PokemonTable);