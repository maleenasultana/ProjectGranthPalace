import React, { useState } from 'react';
 import "./Tabs.css";
import {Box,Flex, IconButton,useBreakpointValue, 
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Tabs = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const displaySearchBar = useBreakpointValue({ base: "none", md: "flex" });

  return (
   <>
      <Flex
      as="nav"
      align="center"
      justifyContent={'center'}
      backgroundImage={'radial-gradient(#54b3d6,#250f72)'} 
      color="white"
      marginTop={1}
    >
       <Flex
        display={{ base: "none",md:"flex" }}
        width="full"
        maxW="md"
        justifyContent={'center'}
        mr={4}
      >
   <Box  display={displaySearchBar}
    transition='transform 0.3s ease-in-out'  className='bg'  px={4} mb={2}>
        {/* <a href="/newarrivals" className='link' mb="2px">NewArrivals</a> */}
        <a href="/knowyourcollege"  className='link'>Know Your College</a>
        <a href="/books"  className='link'>MBBS</a>
        <a href="/postgraduation"  className='link'>Post Graduation</a>
        <a href='/SS'  className='link'>Super Speciality</a>
        <a href="/medicalcollege"  className='link'>Medical College</a>
        <a href="/courses"  className='link'>Courses</a>
        <a href="/bds"  className='link'>BDS</a>
        <a href="/bams"  className='link'>BAMS</a>
        
      
    </Box>
    </Flex>
    <IconButton
        aria-label="Mobile Menu"
        display={{ base: "flex", md: "none" }}
        icon={<HamburgerIcon />}
        bg="transparent"
        color="white"
        onClick={() => setIsMobileMenuOpen(true)}
      />
      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex  direction="column" paddingInliney={5} alignItems="center">
              <a href="/knowyourcollege"  className='link'>Know Your College</a>
        <a href="/books"  className='link'>MBBS</a>
        <a href="/postgraduation"  className='link'>Post Graduation</a>
        <a href='/SS'  className='link'>Super Speciality</a>
        <a href="/medicalcollege"  className='link'>Medical College</a>
        <a href="/courses"  className='link'>Courses</a>
        <a href="/bds"  className='link'>BDS</a>
        <a href="/bams"  className='link'>BAMS</a>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      </Flex>
    </>
  )
}

export default Tabs


