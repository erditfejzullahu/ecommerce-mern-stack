import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';
import {useToast} from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

const CreatePage = () => {
    const toast = useToast();
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: null,
        image: ""
    });


    const {createProduct} = useProductStore();
    const handleAddProduct = async () => {
        const {success, message} = await createProduct(newProduct)
        if(!success){
            toast({
                title: "Error!",
                description: message,
                status: "error"
            })
        }else{
            toast({
                title: "Success!",
                description: message,
                status: "success"
            })
        }
        setNewProduct({name: "", image: "", price: ""})
    }

  return (
    <Container maxW={'container.sm'}>
        <VStack
            spacing={8}
        >
            <Heading as={'h1'} size={'2xl'} textAlign={"center"} mb={8}>Create New Product</Heading>

            <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
                <VStack spacing={4}>
                    <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                    <Input placeholder='Product Price' name='price' value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: parseInt(e.target.value)})}/>
                    <Input placeholder='Product Image url' name='image' value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>

                    <Button colorScheme={"blue"} onClick={handleAddProduct} w={"full"}>Add Product</Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage