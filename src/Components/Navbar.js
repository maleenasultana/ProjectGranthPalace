
'use client';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
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


const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={2}
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

  
  return (
    <>
      <Box className="navbg" backgroundImage={'radial-gradient(#54b3d6,#250f72)'} px={4}>
        
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><img className='logo' src="../../gp_logo.png" alt="logo" />
          </Box>
         

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              
           
                  
              <Menu>
              {/* <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={"../../th.png"}
                  />
                </MenuButton> */}
                {/* <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={"../../th__1.png"}
                  />
                </MenuButton> */}
                {/* <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={"../../th__2.png"}
                  />
                  
                </MenuButton> */}
                <a href="/">
                <AiFillHome 
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="white"
                size={'30px'}
                /></a>
                <a href="/bag"><AiOutlineShoppingCart
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                size={'30px'}
                color="white"
               /></a>
                {/* <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  colorScheme='gray'
                  >
                    
                  <Avatar
                    size={'sm'}
                    src={''}
                  />
                </MenuButton> */}
                <AiOutlineUser
                 rounded={'full'}
                 variant={'link'}
                 cursor={'pointer'}
                 size={'30px'}
                 color="white"
                />
                {/* <MenuList alignItems={'center'}>
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
                </MenuList> */}
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
