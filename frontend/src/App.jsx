import { Box } from '@chakra-ui/react'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import { useColorModeValue } from './components/ui/color-mode'
import { Toaster } from './components/ui/toaster'


const App = () => {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/create' element={<CreatePage />}/>
      </Routes>
      <Toaster />
    </Box>
  )
}

export default App