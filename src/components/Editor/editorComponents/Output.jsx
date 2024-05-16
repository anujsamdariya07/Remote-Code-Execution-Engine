import React, { useState } from 'react'
import { Box, Text, Button, useToast } from '@chakra-ui/react'
import { executeCode } from '../Api'

function Output({editorRef, language}) {
    const toast = useToast()
    
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const runCode = async () => {
        const sourceCode = editorRef.current.getValue()
        if(!sourceCode) return
        try {
            setIsLoading(true)
            const {run:result} = await executeCode(language, sourceCode)
            setOutput(result.output)
        } catch (error) {
            console.log(error)
            toast({
                title: 'An error occured.', 
                description: error.message || 'Unable to run code', 
                status: 'error', 
                duration: 6000, 
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Box w='50%'>
            <Text mb={2} fontSize={'large'}>Output</Text>
            <Button
                isLoading={isLoading}
                onClick={runCode}
                variant='outline'
                colorScheme='green'
                mb={4}
            >Run Code</Button>
            <Box
                height='70vh'
                padding={2}
                border='1px solid'
                borderColor='#333'
            >
                {
                    output? output: 'Click the "Run Code" to see the output!'
                }
            </Box>
        </Box>
    )
}

export default Output