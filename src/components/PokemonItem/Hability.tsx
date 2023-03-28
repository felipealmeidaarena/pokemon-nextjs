import { Flex, Image, Text } from "@chakra-ui/react";

type HabilityProps = {
  imageUrl: string;
  type: string;
}

export const Hability = ({ imageUrl, type }: HabilityProps) => {

  const getBgColor = (elementType: string) => {
    if (elementType === 'Grass') {
      return '#62b957'
    } else if (elementType === 'Poison') {
      return '#a552cc'
    } else {
      return '#000'
    }
  }

  return (
    <Flex bg={getBgColor(type)} direction='row' gap='2' p='2' rounded='lg'>
      <Image w='4' src={imageUrl} alt="element-image" />
      <Text color='#FFFFFF' fontWeight='900'>{type}</Text>
    </Flex>
  )
}