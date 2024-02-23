'use client';

import React from 'react';
import Features from './Features'
import NewArrivals from "./NewArrivals"
import { Flex,Box, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import Books from './Books';
import PostGraduation from './PostGraduation';
import SS from './SS';
import MedicalCollege from './Medical College';
import Courses from './Courses';
import Bds from './Bds';
import Bams from './Bams';
import KnowyourCollege from './KnowyourCollege';
import Contact from './Contact';
import Footer from "./Footer";


export default function WithVideoBackground() {
  return (
    <>
   
    <Flex
      w={'full'}
      h={'400px'}
      position="relative"
      overflow="hidden"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '400px',
          objectFit: 'fill',
          zIndex: -1,
        }}
      >
        <source src="../../GranthPalace.mp4" type="video/mp4" />
        
      </video>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 2, md: 4 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <VStack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            {/* Your content here */}
          </Text>
          <Flex direction={'row'}>
          {/* <Button
              bg={'whiteAlpha.200'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              onClick={redirectToPage1}
              px={4}
            >
              Contact Us
            </Button>

            <Button
              bg={'whiteAlpha.200'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              onClick={redirectToPage}
            >
           About Us
            </Button> */}

          </Flex>
        </VStack>
      </VStack>
    </Flex> 
    <Box>
      <Features/>
       <Books/>
      <NewArrivals/>
      <PostGraduation/>
      <SS/>
      <MedicalCollege/>
      <Courses/>
      <Bds/>
      <Bams/>
      <KnowyourCollege/>
      <Contact/>
      <Footer/>
    </Box>
    </>
  );
}

