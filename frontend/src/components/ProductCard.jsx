import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CiSquareMore, CiTrash } from 'react-icons/ci'
import { useColorModeValue } from './ui/color-mode'

const ProductCard = ({product}) => {
    const textColor = useColorModeValue('gray.600', 'gray.200')
    const bg = useColorModeValue('white', 'gray.800')
    const handleDelete = () => {

    }
    const onOpen = () => {

    }
  return (
    <Box
        shadow={'lg'}
        rounded={'lg'}
        overflow={'hidden'}
        transition={'all 0.3s'}
        _hover={{transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit={"cover"}/>
        <Box p={4}>
            <Heading as={'h3'} size={'md'} mb={'2'}>{product.name}</Heading>
            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>${product.price}</Text>
        </Box>

        <HStack p={2}>
            <IconButton onClick={onOpen} colorScheme={"blue"}><CiSquareMore /></IconButton>
            <IconButton onClick={() => handleDelete(product._id)} colorScheme={'dark'}><CiTrash /></IconButton>
        </HStack>
    </Box>
  )
}

export default ProductCard