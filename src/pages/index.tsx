import { Center, Container, Grid } from '@chakra-ui/react';
import { PokemonItem, PokemonTristeProps } from '@/components/PokemonItem';
import { useEffect, useState } from 'react';

import { api } from '@/services/api';

const IndexPage = () => {
  const [data, setData] = useState<PokemonTristeProps[]>([])

  const handleGetData = async () => {
    try {
      const response = await api.get('/pokemons');
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetData();
  }, [])

  return (
    <Center h='100vh'>
      {!!data && (
        <Container maxW='1140px' justifyContent='center'>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {data.map((item, index) => (
              <PokemonItem key={index} name={item.name} id={item.id} elementsAvatarUrl={item.elementsAvatarUrl} avatarUrl={item.avatarUrl} />
            ))}
          </Grid>
        </Container>
      )}
    </Center>
  )
}

export default IndexPage