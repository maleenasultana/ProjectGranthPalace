'use client';
import "./Footer.css" 
import { PhoneIcon, EmailIcon, } from '@chakra-ui/icons';

import React from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import Contact from "./Contact";
import Policy from "./Policy";
import Features from './Features'
import About from "./About";
const Logo = (props) => {
  return (
    <img src="../../gp_logo.png" alt="logo" className="logo" height={32} viewBox="0 0 120 28" xmlns="" {...props}/>
     
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.700', 'gray.900')}
      color={useColorModeValue('white', 'white.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Box as="a" href={'./About'}>
              Overview
            </Box>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Box as="a" href={'./Features'}>
                Features
              </Box>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}
              >
                New
              </Tag>
            </Stack>
            <Box as="a" href={'#'}>
              Tutorials
            </Box>
            <Box as="a" href={'#'}>
              Pricing
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
           
           
            <Box as="a" href={'./Contact'}>
              Careers
            </Box>
            <Box as="a" href={'./Contact'}>
              Contact Us
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'https://www.wonder.legal/in/modele/website-cookies-policy?msclkid=89102818a8081c0639a34dc16bce4f2e'}>
              Cookies Policy
            </Box>
            <Box as="a" href={Policy}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Box as="a" href={'https://www.bing.com/ck/a?!&&p=583db211f445a4c6JmltdHM9MTcwODczMjgwMCZpZ3VpZD0xZWZiNTM3Zi02OWFhLTY4ZTEtM2YzMC00MDEwNjhmNzY5ZjUmaW5zaWQ9NTIyNQ&ptn=3&ver=2&hsh=3&fclid=1efb537f-69aa-68e1-3f30-401068f769f5&psq=facebook&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLw&ntb=1'}>
              Facebook
            </Box>
            <Box as="a" href={'https://twitter.com/home'}>
              Twitter
            </Box>
            
            <Box as="a" href={'https://instagram.com/'}>
              Instagram
            </Box>
            <Box as="a" href={'https://linkedin.com'}>
              LinkedIn
            </Box>
            <Box as="a" href={'tel:+919130448884'}>
            <PhoneIcon/> Call Us
            </Box>
            <Box as="a" href={'mailto:granthapalace@gmail.com'}>
            <EmailIcon /> Email Us
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Copyrights © 2024.  All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
