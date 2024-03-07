
'use client';
import { AiFillEnvironment, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import { HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css" ;

// import {
//   Box,
//   Flex,
//   Avatar,
//   Text,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   Center,
//   HStack,
// } from '@chakra-ui/react';


// const NavLink = (props) => {
//   const { children } = props;

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={2}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.900', 'gray.900'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   );
// };

// export default function Nav() {
//   const [colorMode, setColorMode] = useState('light');
//   const { isOpen, onOpen, onClose } = useDisclosure();

  
//   return (
//     <>
//       <Box className="navbg" backgroundImage={'radial-gradient(#54b3d6,#250f72)'} px={4}position={''}>
        
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//         <HamburgerIcon color={'white'}/>
//           <Box><img className='logo' src="../../gp_logo.png" alt="logo" />
//           </Box>
         
//           <a href="#" className="blink"><AiFillEnvironment />from Location</a>
//           <Flex alignItems={'center'}>
//             <Stack direction={'row'} spacing={8}>
//           <Box className="search_box">
//                 <input  className="search_box" htmlSize={4} width='auto' />
//                 <Button className="btn"><AiOutlineSearch  rounded={'half'}
//                  variant={'link'}
//                  cursor={'pointer'}
//                  size={'30px'}
//                  color="blue.900" 
//                  /></Button>
//              </Box>
           
                  
//               <Menu display={{md:"none"}}>
             
//                 <a className="blink" display={{md:"none"}}>
//                  Hello! "abc@gmail.com"
//                </a>
//                 <a href="#" display={{md:"none"}} className="alink">Orders & Returns</a>
//                 <AiOutlineUser  
//                  rounded={'full'}
//                  variant={'link'}
//                  cursor={'pointer'}
//                  size={'30px'}
//                  color={"white"}
                
//                 />
//                 <a href="/bag"><AiOutlineShoppingCart
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 size={'30px'}
//                 color="white"
              
//                /></a>
//                 <a href="/">
//                 <AiFillHome 
            
//                 rounded={'full'}
//                 variant={'link'}
//                 cursor={'pointer'}
//                 color="white"
//                 size={'30px'}
//                 /></a>
                
//                 {/* <MenuButton
//                   as={Button}
//                   rounded={'full'}
//                   variant={'link'}
//                   cursor={'pointer'}
//                   minW={0}
//                   colorScheme='gray'
//                   >
                    
//                   <Avatar
//                     size={'sm'}
//                     src={''}
//                   />
//                 </MenuButton> */}
               
//                 {/* <MenuList alignItems={'center'}>
//                   <br />
//                   <Center>
                  
//                     <Avatar
//                       size={'2xl'}
//                       src={''}
//                     />
//                   </Center>
//                   <br />
//                   <Center>
//                     <p>Username</p>
//                   </Center>
//                   <br />
//                   <MenuDivider />
//                   <MenuItem>Your Servers</MenuItem>
//                   <MenuItem>Account Settings</MenuItem>
//                   <MenuItem>Logout</MenuItem>
//                 </MenuList> */}
//               </Menu>
//             </Stack>
//           </Flex>
//         </Flex>
//       </Box>
//     </>
//   );
// }


//.......................................................................
import { Flex, Input, IconButton, Button, Box, useBreakpointValue, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,} from "@chakra-ui/react";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displaySearchBar = useBreakpointValue({ base: "none", md: "flex" });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      backgroundImage={'radial-gradient(#54b3d6,#250f72)'} 
      color="white"
      height={'16'}
    >
      <Box>
        {/* Logo */}
        <img className='logo' src="../../gp_logo.png" alt="Logo" />
      </Box>
<Box></Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        width="full"
        maxW="lg"
        align="center"
        mr={4}
      >
       <Button color='white' marginRight={5} bg="transparent" className="blink"><AiFillEnvironment bg="transparent"/>Your Location</Button> 
        {/* Search Bar */}
        <Box display={displaySearchBar} flex="1">
          <Input variant="filled" placeholder="Search..." />
       
       <Button className="btn"><AiOutlineSearch  rounded={'half'}
                 variant={'link'}
                 cursor={'pointer'}
                 size={'30px'}
                 color="blue.900" 
                 /></Button>
                 <Box></Box>
                 <Box></Box>
        </Box>
      </Flex>

      {/* Signup Button */}
      
      <Box   display={displaySearchBar} >
       <a href="/" className="blink">
                <AiFillHome 
            
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                color="white"
                size={'25px'}
                
                />Back To Home</a>

                 
              </Box>  
              <Box  display={displaySearchBar} className="blink">
              <a href="/bag"><AiOutlineShoppingCart
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                size={'30px'}
                color="white"
                bg="transparent"
               />Your Cart</a>
               
              </Box>
              <Button  color={'white'} width={'auto'} bg="transparent" className="btn"><AiOutlineUser  
                 rounded={'full'}
                 variant={'link'}
                 cursor={'pointer'}
                 size={'30px'}
                 color={"white"}
              
                />Hello!</Button>

      {/* Cart Icon */}
      <IconButton
        aria-label="Cart"
        icon={AiOutlineShoppingCart}
        bg="transparent"
        color="white"
        
      />

      {/* Hamburger Icon for Mobile */}
      <IconButton
        aria-label="Mobile Menu"
        display={{ base: "flex", md: "none" }}
        icon={<HamburgerIcon />}
        bg="transparent"
        color="white"
        onClick={() => setIsMobileMenuOpen(true)}
      />

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" paddingInliney={5} alignItems="center">
                {/* Logo */}
                {/* <img src="/logo.png" alt="Logo" /> */}
                {/* Search Bar */}
                {/* <Input variant="filled" placeholder="Search..." /> */}
                {/* Signup Button */}
                <a href="#"><AiOutlineSearch/></a>
                <a href="#" >Orders & Returns</a>
                <a href="#">Logout</a>
                {/* Cart Icon */}
                <IconButton aria-label="Cart" icon={AiOutlineShoppingCart} bg="transparent" color="white" mt={2} onClick={() => setIsMobileMenuOpen(false)} />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
