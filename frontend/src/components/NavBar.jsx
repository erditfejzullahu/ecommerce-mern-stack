import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaCloudMoon, FaSun } from "react-icons/fa";
const NavBar = () => {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Container w={"full"} maxW={"1140px"}  px={4} >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{base: "22", sm: "26"}}    
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r, cyan.400, blue.200)"}
                // gradientFrom={"cyan.400"}
                // gradientTo={"blue.200"}
                bgClip={"text"}
            >
                <Link to={'/'}>Product Store</Link>
            </Text>
            <HStack spaceX={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <CiSquarePlus size={24}/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === "dark" ? <><FaCloudMoon /></> : <><FaSun /></>}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default NavBar