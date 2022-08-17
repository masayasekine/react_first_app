import * as React from 'react'

import { Button, ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Button>ボタン</Button>
    </ChakraProvider>
  )
}