import { useRouter } from "next/router";
import { Container, Flex, Image, Text, Button, TableContainer, Table, Tr, Tbody, Td, Tfoot } from "@chakra-ui/react"

export const Pokemon = () => {

    const router = useRouter()
    console.log(router.query);

    return (
        // <h1>Pokémon {router.query.id}</h1>
        <Flex h='100vh' bg='#89be89' alignItems='center'>
            <Container maxW='1140px'>
                <Flex h='25vh' pos="relative">
                    <Flex pos="absolute" top='0' right={60} direction='row' justifyContent='center' gap='10'>
                        <Flex>
                            <Image w='240px' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                        </Flex>
                        <Flex direction='column' justifyContent='center' gap='3'>
                            <Text color='#17171b99' fontSize='24' fontWeight='900'>#1</Text>
                            <Text color='#FFFFFF' fontSize='36' fontWeight='900'>Bulbasaur</Text>
                            <Flex gap='5'>
                                <Flex bg='#62b957' gap='2' p='2' rounded='lg'>
                                    <Image w='6' src="https://poke-apiv2.vercel.app/assets/Icons/grassIcon.svg" />
                                    <Text color='#FFFFFF' fontSize='20' fontWeight='900'>Grass</Text>
                                </Flex>
                                <Flex bg='#a552cc' gap='2' p='2' rounded='lg'>
                                    <Image w='6' src="https://poke-apiv2.vercel.app/assets/Icons/poisonIcon.svg" />
                                    <Text color='#FFFFFF' fontSize='20' fontWeight='900'>Poison</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex bg='#FFFFFF' direction='column' gap='5' rounded='2xl' px='10' py='5'>
                    <Flex gap='5'>
                        <Button>About</Button>
                        <Button>Stats</Button>
                    </Flex>
                    <Flex direction='column' gap='3'>
                        <Text color='#62b957' fontSize='24px' fontWeight='900'>Pokedex Data</Text>
                        <TableContainer>
                            <Table variant='striped'>
                                <Tbody>
                                    <Tr>
                                        <Td>Species</Td>
                                        <Td>Bulbasaur</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Base XP</Td>
                                        <Td>64</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Height</Td>
                                        <Td>0.7 m</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Weight</Td>
                                        <Td>6.9 kg</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Abilities</Td>
                                        <Td>Overgrow, Chlorophyll</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    )
}

export default Pokemon