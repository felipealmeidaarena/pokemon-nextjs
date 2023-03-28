import { Container, Flex, Grid } from '@chakra-ui/react';
import { PokemonItem, PokemonTristeProps } from '@/components/PokemonItem';
import { useEffect, useState } from 'react';

import { api } from '@/services/api';
import { Pagination } from '@/components/Pagination';

const IndexPage = () => {
  const [data, setData] = useState<PokemonTristeProps[]>([]);
  const [totalItems, setTotalItems] = useState(0)
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

  const handleGetData = async () => {
    try {
      const response = await api.get(`/pokemons?per_page=${itemsPerPage}&page=${page}`);
      setData(response.data.result)
      setTotalItems(response.data.total)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetData();
  }, [page])

  return (
    <Flex p='30px'>
      {!!data && (
        <Container maxW='1140px' justifyContent='center'>
        <Pagination page={page} setPage={setPage} itemsPerPage={itemsPerPage} totalItems={totalItems} />
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            {data.map((item, index) => (
              <PokemonItem key={index} name={item.name} id={item.id} elementsAvatarUrl={item.elementsAvatarUrl} avatarUrl={item.avatarUrl} />
            ))}
          </Grid>
        </Container>
      )}
    </Flex>
  )
}

export default IndexPage
