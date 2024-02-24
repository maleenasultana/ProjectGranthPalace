
import { Image, Box, Stack, HStack, Heading, Text, VStack, useColorModeValue, List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper(props) {
  const { children } = props;

  return (
  
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <>
    <Box py={12} mt={8}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" py={4}>
        BDS BOOKS
        </Heading>
        {/* <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at anytime.
        </Text> */}
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            Operative Dentistry
            </Text>
            <HStack justifyContent={'center'} py={4}>
            <Image
            rounded={'lg'}
            height={60}
            width={180}
            
            objectFit={'cover'}
            src={"https://www.atithibooks.com/s/598ecac63f8a479051bb2633/64b241fcc1c7e63da8862c25/9789354666308-240x240.jpg"}
            alt="#"
          />

            </HStack>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₹
              </Text>
              <Text fontSize="2xl" fontWeight="900">
                837
              </Text>
              <Text fontSize="1xl" color="gray.500" textDecoration={'line-through'}>
               1195
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            
            <Box w="30%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
             Buy Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
              Best Seller
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
              DenTest/Clinical Sciences 
              </Text>
              <HStack justifyContent={'center'} py={4}>
            <Image
            rounded={'lg'}
            height={60}
            width={180}
            
            objectFit={'cover'}
            src={"https://www.atithibooks.com/s/598ecac63f8a479051bb2633/64ce023a2ce293f602745e14/9788181915436-240x240.jpg"}
            alt="#"
          />

            </HStack>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  ₹
                </Text>
                <Text fontSize="2xl" fontWeight="900">
                  6000
                </Text>
                <Text fontSize="1xl" color="gray.500" textDecoration={'line-through'}>
               7500
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
             
              <Box w="30%" pt={7}>
                <Button w="full" colorScheme="red">
                Buy Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Periodontics
            </Text>
            <HStack justifyContent={'center'} py={4}>
            <Image
            rounded={'lg'}
            height={60}
            width={180}
            
            objectFit={'cover'}
            src={"https://www.atithibooks.com/s/598ecac63f8a479051bb2633/65057646772d24fb660ceebd/9781119793557-640x640.jpg"}
            alt="#"
          />

            </HStack>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₹
              </Text>
              <Text fontSize="2xl" fontWeight="900">
               9038
              </Text>
              <Text fontSize="1xl" color="gray.500" textDecoration={'line-through'}>
                12050
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            
            <Box w="30%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
             Buy Now
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        
      </Stack>
      <Box  justify={'center'} >
      <Stack align={'center'}>
      <Button
              bg={'gray.200'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'gray.500' }}
              px={4}
            >
             View more...
            </Button>
      </Stack>
    </Box>
    </Box>
    
    </>
  );
}
