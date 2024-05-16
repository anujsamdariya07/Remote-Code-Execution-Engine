import React, { useRef, useState } from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { Editor } from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector'
import { CODE_SNIPPETS } from '../constants'
import Output from './Output'

function CodeEditor() {
    const [value, setValue] = useState('')
    const [language, setLanguage] = useState('javascript')

    const editorRef = useRef()
    const onMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }

    const onSelect = (language) => {
        setLanguage(language)
        setValue(
            CODE_SNIPPETS[language]
        )
    }
    
    return (
        <Box>
            <HStack spacing={4}>
                <Box w='50%'>
                    <LanguageSelector language={language} onSelect={onSelect} />
                    <Editor
                        value={value}
                        height="70vh"
                        language={language}
                        defaultValue={CODE_SNIPPETS[language]}
                        theme='vs-dark'
                        options={{
                            wordWrap: 'on', 
                        }}
                        onChange={(value) => setValue(value)}
                        onMount={onMount}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>
        </Box>
    )
}

export default CodeEditor