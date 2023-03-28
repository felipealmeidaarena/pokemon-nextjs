import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { transform } from "framer-motion";

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
  const getBgColor = (elementType: string) => {
    if (elementType === 'Grass') {
      return '#89be89'
    } else if (elementType === 'Fire') {
      return '#ffa857'
    } else if (elementType === 'Water') {
      return '#55abf6'
    } else if (elementType === 'Bug') {
      return '#8CD676'
    } else {
      return '#3C3C3C'
    }
  }

  return (
    <GridItem w='100%' rounded='xl' bg={getBgColor(elementsAvatarUrl[0].type)} px='3' py='2' _hover={{}}>
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
          <Image w="130px" _hover={{transition: "0.6s ease-in-out", transform: "scale(1.4)"}} src={avatarUrl} alt="avatar-url" />
        </Flex>
      </Flex>
    </GridItem>
  )
}