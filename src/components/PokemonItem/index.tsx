import { Flex, GridItem, Image, Text } from "@chakra-ui/react";

import { Hability } from "./Hability";

export type ElementType = {
  imageUrl: string;
  type: string;
}

export type PokemonTristeProps = {
  name: string;
  id: number;
  elementsAvatarUrl: ElementType[];
  avatarUrl: string;
}

export const PokemonItem = ({ name, id, elementsAvatarUrl, avatarUrl }: PokemonTristeProps) => {
  return (
    <GridItem w='100%' rounded='xl' bg='#89be89' px='3' py='2'>
      <Flex direction='row' justifyContent='space-between'>
        <Flex direction='column' justifyContent='center' gap='3'>
          <Flex direction='column'>
            <Text color='#17171b99' fontWeight='900'>
              #{id}
            </Text>
            <Text color='#FFFFFF' fontSize='28' fontWeight='900'>{name}</Text>
          </Flex>
          <Flex direction='row'>
            <Flex direction='row' gap='2'>

              {elementsAvatarUrl.map((item, index) => (
                <Hability key={index} imageUrl={item.imageUrl} type={item.type} />
              ))}

            </Flex>
          </Flex>
        </Flex>
        <Flex direction='column' justifyContent='center'>
          <Image w="130px" src={avatarUrl} alt="avatar-url" />
        </Flex>
      </Flex>
    </GridItem>
  )
}