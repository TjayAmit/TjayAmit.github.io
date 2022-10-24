import React from 'react';
import { ChakraProvider, Box, Text, theme, Heading } from '@chakra-ui/react';
import LayoutPage from './Component/Pages/Layout/LayoutPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LayoutPage />
    </ChakraProvider>
  );
}

export default App;
