import { Flex, Image, Text } from "@chakra-ui/react";

type HabilityProps = {
  imageUrl: string;
  type: string;
}

export const Hability = ({ imageUrl, type }: HabilityProps) => {

  const getBgColor = (elementType: string) => {
    if (elementType === 'Grass') {
      return '#62B957'
    } else if (elementType === 'Poison') {
      return '#A552CC'
    } else if (elementType === 'Fire') {
      return '#fD7D24'
    } else if (elementType === 'Flying') {
      return '#748FC9'
    } else if (elementType === 'Water') {
      return '#4A90dA'
    } else if (elementType === 'Bug') {
      return '#8CB230'
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