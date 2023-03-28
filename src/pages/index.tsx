import { Container, Flex, Grid, HStack, IconButton, Text } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { PokemonItem, PokemonTristeProps } from '@/components/PokemonItem';
import { useEffect, useState } from 'react';

import { api } from '@/services/api';

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

  const handleOnChangePage = (type: 'inc' | 'dec') => {
    if (type === 'inc') {
      setPage((prev) => prev + 1)
    }

    if (type === "dec") {
      setPage((prev) => prev - 1)
    }
  }

  useEffect(() => {
    handleGetData();
  }, [page])

  return (
    <Flex p='50px'>
      {!!data && (
        <Container maxW='1140px' justifyContent='center'>

          <HStack justify="space-between" m={5} >
            <Flex>
              <Text fontWeight="bold" color="#555" fontSize="18px">{page === 1 ? 1 : (page - 1) * itemsPerPage} - {page * itemsPerPage > totalItems ? totalItems : page * itemsPerPage} de {totalItems}</Text>
            </Flex>
            <HStack>
              <IconButton onClick={() => handleOnChangePage('dec')} isDisabled={page === 1 ? true : false} icon={<HiChevronLeft size={24} color="#fff" />} _hover={{ bg: "#000" }} bg="#555" aria-label='' />
              <IconButton onClick={() => handleOnChangePage('inc')} isDisabled={(page * itemsPerPage) >= totalItems ? true : false} icon={<HiChevronRight size={24} color="#fff" />} _hover={{ bg: "#000" }} bg="#555" aria-label='' />
            </HStack>
          </HStack>

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
