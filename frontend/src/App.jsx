import { Box } from '@chakra-ui/react'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import CreatePage from './components/CreatePage'
import { useColorModeValue } from './components/ui/color-mode'


const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/create' element={<CreatePage />}/>
      </Routes>
    </Box>
  )
}

export default App