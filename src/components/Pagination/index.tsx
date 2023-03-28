import { HStack, Flex, Text, IconButton } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type Pagination = {
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    itemsPerPage: number;
    totalItems: number;
}

export const Pagination = ({ page, setPage, itemsPerPage, totalItems } : Pagination) => {
    const handleOnChangePage = (type: 'inc' | 'dec') => {
        if (type === 'inc') {
          setPage((prev) => prev + 1)
        }
    
        if (type === "dec") {
          setPage((prev) => prev - 1)
        }
      }

    return (
        <HStack justify="space-between" m={5} >
            <Flex>
                <Text fontWeight="bold" color="#555" fontSize="18px">{page === 1 ? 1 : (page - 1) * itemsPerPage} - {page * itemsPerPage > totalItems ? totalItems : page * itemsPerPage} de {totalItems}</Text>
            </Flex>
            <HStack>
                <IconButton onClick={() => handleOnChangePage('dec')} isDisabled={page === 1 ? true : false} icon={<HiChevronLeft size={24} color="#fff" />} _hover={{ bg: "#000" }} bg="#555" aria-label='' />
                <IconButton onClick={() => handleOnChangePage('inc')} isDisabled={(page * itemsPerPage) >= totalItems ? true : false} icon={<HiChevronRight size={24} color="#fff" />} _hover={{ bg: "#000" }} bg="#555" aria-label='' />
            </HStack>
        </HStack>
    )
}