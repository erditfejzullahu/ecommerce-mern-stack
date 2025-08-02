import { Box, Button, Heading, HStack, IconButton, Image, Input, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CiSquareMore, CiTrash } from 'react-icons/ci'
import { useProductStore } from '../store/product'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdatedProduct] = useState(product)

    const toast = useToast();
    const textColor = useColorModeValue('gray.600', 'gray.200')
    const bg = useColorModeValue('white', 'gray.800')

    const {deleteProduct, updateProduct} = useProductStore();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const handleDelete = async (id) => {
        const {success, message} = await deleteProduct(id);
        
        if(success){
            toast({
                title: "Success!",
                description: message,
                status: "success"
            })
        }else{
            toast({
                title: "Error!",
                description: message,
                status: "error"
            })
        }
    }

    const handleUpdateProduct = async () => {
        const {success, message} = await updateProduct(product._id, updatedProduct)
        if(success){
            toast({
                title: "Success!",
                description: "Product updated successfully!",
                status: "success"
            })
            onClose()
        }else{
            toast({
                title: "Error!",
                description: message,
                status: "error"
            })
        }
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
            <IconButton onClick={onOpen} colorScheme={"blue"}><CiSquareMore size={24} /></IconButton>
            <IconButton onClick={() => handleDelete(product._id)} colorScheme={'red'}><CiTrash size={24} /></IconButton>
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />

            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack p={4}>
                        <Input value={updatedProduct.name} onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})} placeholder='Product Name' name='name'/>
                        <Input value={updatedProduct.price} onChange={(e) => setUpdatedProduct({...updatedProduct, price: parseInt(e.target.value)})} placeholder='Price' name={"price"} type='number'/>
                        <Input value={updatedProduct.image} onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})} placeholder='Image URL' name='image'/>
                    </VStack>
                </ModalBody>
                <ModalFooter >
                    <Button onClick={handleUpdateProduct} colorScheme={"blue"} mr={3}>Update</Button>
                    <Button onClick={onClose} colorScheme={"teal"}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    </Box>
  )
}

export default ProductCard