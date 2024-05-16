import React from 'react'
import { Box, Text, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../constants'

const languages = Object.entries(LANGUAGE_VERSIONS)
const ACTIVE_COLOR = 'blue.400'

function LanguageSelector({language, onSelect}) {
  return (
    <Box ml={2} mb={4}>
      <Text
        mb={2}
        fontSize={'large'}
      >Language: </Text>

      <Menu isLazy>
        <MenuButton as={Button} >
          {language}
        </MenuButton>
        <MenuList className='p-0 m-0' backgroundColor={'#110c1b'}>
          {
            languages.map((lang, version) => (
              <MenuItem 
              color={
                lang[0] === language ? ACTIVE_COLOR: ''
              }
              bg={
                lang[0] === language ? 'gray.700': 'transparent'
              }
              _hover={{
                color: ACTIVE_COLOR, 
                bg: 'gray.900' 
              }}
              className=' rounded-none' key={lang[0]} fontSize={'medium'} onClick={() => onSelect(lang[0])}>
                {lang[0]}
                &nbsp;
                <Text
                color='gray-600'
                fontSize={'smaller'}
                fontWeight={100}
                >
                  {lang[1]}
                </Text>
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  )
}

export default LanguageSelector