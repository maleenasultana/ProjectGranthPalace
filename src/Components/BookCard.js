'use client';

import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

const IMAGE =
  'https://cdn.kobo.com/book-images/Images/8064d353-12bd-4a24-a7a2-3be82287833a/500/500/False/image.jpg';

export default function ProductSimple() {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'200px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 0,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          _groupHover={{
            _after: {
              filter: 'blur(0px)',
              transform: 'scale(1.1)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text>
          <Heading  fontFamily={'body'} fontWeight={500} fontSize={{base: 'sm',sm: 'lg' }}>
           The Art Of Medical Communication
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ₹2257
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹3199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
