import styled from '@emotion/styled';
import { useContext } from 'react';
import PokemonContext from '../PokemonContext';

const Input = styled.input`
  width: 100%;
  font-size: large;
  padding: 0.2rem;
`;


const PokemonFilter = () => {
  const { filter, filterSet } = useContext(PokemonContext);
  return (
    <Input
      type="text"
      value={filter}
      onChange={(e) => filterSet(e.target.value)}
    />
  );
};

export default PokemonFilter;