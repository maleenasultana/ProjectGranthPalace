'use client';

import React from 'react';
import About from "../Components/About"
import { Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

export default function WithVideoBackground() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
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
          height: '700px',
          objectFit: 'fill',
          zIndex: -1,
        }}
      >
        <source src="../../GranthPalace.mp4" type="video/mp4" />
        
      </video>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
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
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
            >
              Show me more
            </Button> */}
            {/* <Button
              bg={'whiteAlpha.200'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
              onClick={About}
            >
              About
            </Button> */}
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
}

