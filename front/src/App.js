import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import HomePageView from "./pages/home";

function App() {
  return (
    <ChakraProvider>
      <HomePageView />
    </ChakraProvider>
  );
}

export default App;
