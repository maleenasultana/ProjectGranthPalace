
'use client';

import { useState } from 'react';
import "./Navbar.css" ;

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.900', 'gray.900'),
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

export default function Nav() {
  const [colorMode, setColorMode] = useState('light');
  const { isOpen, onOpen, onClose } = useDisclosure();

//   const toggleColorMode = () => {
//     setColorMode(colorMode === 'light' ? 'dark' : 'light');
//   };

  return (
    <>
      <Box bg={useColorModeValue('gray.500', 'gray.900')} px={4}>
        
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><img className='logo' src="../../gp_logo.png" alt="logo" />
          </Box>
         

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
                  <img src="../../th.png" alt='icon' className='icon'/>
                  <img src="../../th__1.png" alt='icon' className='icon'/>
                  <img src="../../th__2.png" alt='icon' className='icon'/>
                  
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={''}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                  
                    <Avatar
                      size={'2xl'}
                      src={''}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}