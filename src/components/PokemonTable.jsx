import React from 'react';
import PokemonRow from './PokemonRow';
import styled from '@emotion/styled';
import useStore from '../store';

const Th = styled.th`
  text-align: left;
  font-size: x-large;
`;

const PokemonTable = () => {
  const pokemon = useStore(state => state.pokemon);
  const filter = useStore(state => state.filter);
  const setSelectedPokemon = useStore(state => state.setSelectedPokemon);


  return (
    <table width="100%">
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Type</Th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) => english
            .toLocaleLowerCase()
            .includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>);
};

export default PokemonTable;