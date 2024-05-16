// import './editor.css'; 
import React from 'react'
import { Box } from '@chakra-ui/react'
import CodeEditor from './editorComponents/CodeEditor'

function Editor() {
  return (
    <>
      <Box
        minH='100vh'
        bg='#1a202c'
        color='gray.200'
        px={6}
        py={8}
      >
        <CodeEditor />
      </Box>
    </>
  )
}

export default Editor