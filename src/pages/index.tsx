import { Center, Container, Grid, GridItem, Box, Image, Text, Flex } from '@chakra-ui/react'

const IndexPage = () => (
  <Center h='100vh'>
    <Container maxW='1140px' justifyContent='center'>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem w='100%' rounded='xl' bg='#89be89' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #1
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Bulbasaur
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#62b957' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/grassIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Grass</Text>
                  </Flex>
                  <Flex bg='#a552cc' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/poisonIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Poison</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#89be89' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #2
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Ivysaur
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#62b957' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/grassIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Grass</Text>
                  </Flex>
                  <Flex bg='#a552cc' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/poisonIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Poison</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#89be89' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #3
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Venusaur
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#62b957' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/grassIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Grass</Text>
                  </Flex>
                  <Flex bg='#a552cc' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/poisonIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Poison</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#ffa857' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #4
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Charmander
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#fd7d24' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/fireIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Fire</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/4.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#ffa857' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #5
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Charmeleon
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#fd7d24' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/fireIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Fire</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/5.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#ffa857' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #6
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Charizard
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#fd7d24' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/fireIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Fire</Text>
                  </Flex>
                  <Flex bg='#748fc9' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/flyingIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Flying</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/6.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#55abf6' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #7
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Squirtle
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#4a90da' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/waterIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Water</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/7.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#55abf6' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #8
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Wartortle
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#4a90da' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/waterIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Water</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/8.png" />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem w='100%' rounded='xl' bg='#55abf6' px='3' py='2'>
          <Flex direction='row' justifyContent='space-between'>
            <Flex direction='column' justifyContent='center' gap='3'>
              <Flex direction='column'>
                <Text color='#17171b99' fontWeight='900'>
                  #8
                </Text>
                <Text color='#FFFFFF' fontSize='28' fontWeight='900'>
                  Blastoise
                </Text>
              </Flex>
              <Flex direction='row'>
                <Flex direction='row' gap='2'>
                  <Flex bg='#4a90da' direction='row' gap='2' p='2' rounded='lg'>
                    <Image w='4' src='https://poke-apiv2.vercel.app/assets/Icons/waterIcon.svg' />
                    <Text color='#FFFFFF' fontWeight='900'>Water</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' justifyContent='center'>
              <Image w="130px" src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/official-artwork/9.png" />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  </Center>
)

export default IndexPage