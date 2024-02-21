'use client';

// import React from 'react';
// import {
//   Box,
//   Center,
//   Container,
//   Flex,
//   useColorModeValue,
//   Heading,
//   Text,
//   Stack,
//   Image,
//   Icon,
//   Button,
// } from '@chakra-ui/react';

// const IMAGE =
//   'https://cdn.kobo.com/book-images/Images/8064d353-12bd-4a24-a7a2-3be82287833a/500/500/False/image.jpg';

// const BookCard=({ heading,  Image, href }) =>{
//   return (
   
//     React.createElement(Box, {
//       maxW: {
//         base: 'full',
//         md: '275px'
//       },
//       w: 'full',
//       borderWidth: "2px",
//       boxShadow:"lg",
//       shadowColor:"gray",
//       borderRadius: "lg",
//       overflow: "hidden",
//       p: 5,
//       _hover:{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.300', 'gray.400'),
//         transform: 'scale(1.05)',
//       },
//     }, React.createElement(Stack, {
//       align: 'start',
//       spacing: 2
//     }, React.createElement(Flex, {
//       w: 16,
//       h: 16,
//       align: 'center',
//       justify: 'center',
//       color: 'white',
//       // rounded: 'full',
//       bg: useColorModeValue('gray.100', 'gray.700')
//     }, Image), React.createElement(Box, {
//       mt: 2
//     }, React.createElement(Heading, {
//       size: "md"
//     }, heading), React.createElement(Text, {
//       mt: 1,
//       fontSize: 'sm'
//     },)), React.createElement(Button, {
//       variant: 'link',
//       colorScheme: 'blue',
//       size: 'sm',
//       href: href
//     }, "Buy Now")))
   
//   );
// }

// //.................................................................................

// export default function CardListWith() {
//   return (
//     React.createElement(Box, {
//       p: 4
//     }, React.createElement(Stack, {
//       spacing: 4,
//       as: Container,
//       maxW: '3xl',
//       textAlign: 'center',
//     }, React.createElement(Heading, {
//       fontSize: {
//         base: '2xl',
//         sm: '4xl'
//       },
//       fontWeight: 'bold'
//     }, "Buy Online Medical Books At Best Prices!"), React.createElement(Text, {
//       color: 'gray.600',
//       fontSize: {
//         base: 'sm',
//         sm: 'lg'
//       }
//     }, )), React.createElement(Container, {
//       maxW: '5xl',
//       mt: 12
//     }, React.createElement(Flex, {
//       flexWrap: "wrap",
//       gridGap: 6,
//       justify: "center"
//     }, React.createElement(BookCard, {
//       heading: 'The Art Of Medical Communication',
//       Image: React.createElement(Image, {
//         src: "https://cdn.kobo.com/book-images/Images/8064d353-12bd-4a24-a7a2-3be82287833a/500/500/False/image.jpg",
//         w: 80,
//         h: 50
//       }),
      
//       href: '#'
//     }), React.createElement(BookCard, {
//       heading: 'Mastering MBBS 1st Year',
//      Image: React.createElement(Image, {
//         src: "https://www.atithibooks.com/s/598ecac63f8a479051bb2633/6565d6b9680d355cfe70b78d/9789356967144-240x240.jpg",
//         w: 80,
//         h: 50
//       }),
     
//       href: '#'
//     }), React.createElement(BookCard, {
//       heading: 'Essentails of Medical Pharmacology',
//       Image: React.createElement(Image, {
//        src: "https://www.atithibooks.com/s/598ecac63f8a479051bb2633/655f03a4f56975732e620533/9789356964327-240x240.jpg",
//         w: 80,
//         h: 50
//       }),
     
//       href: '#'
//     }), React.createElement(BookCard, {
//       heading: 'Review of Postgraduate Pathology',
//    Image: React.createElement(Image, {
//        src: "https://www.atithibooks.com/s/598ecac63f8a479051bb2633/652647fc54d47c4dea5f36de/9789356963078-240x240.jpg",
//         w: 80,
//         h: 50
//       }),
      
//       href: '#'
//     }),
//     React.createElement(BookCard, {
//         heading: 'Exam Preparatory Manual MEDICINE',
//         Image: React.createElement(Image, {
//           src: "https://www.atithibooks.com/s/598ecac63f8a479051bb2633/64e73e7eade4705f0e9f6c18/whatsapp-image-2023-08-24-at-16-55-07-240x240.jpeg",
//           w: 80,
//           h: 50
//         }),
        
//         href: '#'
//       }), React.createElement(BookCard, {
//       heading: 'Medical Microbiology',
//    Image: React.createElement(Image, {
//         src: "https://www.atithibooks.com/s/598ecac63f8a479051bb2633/64c9f393f724b110f11cd631/9789356963320-240x240.jpg",
//         w: 150,
//         h: 180
//       }),
     
//       href: '#'
//     }))))
//   );
// }
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
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
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
