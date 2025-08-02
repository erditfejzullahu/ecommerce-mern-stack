import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { LuRocket } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])
  
  return (
    <Container maxW={'container.xl'} py={12}>
      <VStack spaceY={8}>
        <Text fontSize={30} fontWeight={"bold"} bgGradient={'to-r'} gradientFrom={'cyan.400'} gradientTo={'blue.500'} bgClip={"text"}>
          Current Products <LuRocket />
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          gap={8}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>

        <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
          No products found! {" "} 
          <Link to={'/create'}>
            <Text as={'span'} color={'blue.500'} _hover={{textDecoration: "underline"}}>
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage