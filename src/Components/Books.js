
import { Image, Box, Stack, HStack, Heading, Text, VStack, useColorModeValue, List, ListItem, ListIcon, Button, ScaleFade } from '@chakra-ui/react';
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
        MBBS Books Gallery
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
            Anatomy by Chaurasia
            </Text>
            <HStack justifyContent={'center'} py={4}  
            _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.300', 'gray.400'),
              transform: 'scale(1.05)',
             } }>
            <Image
            rounded={'lg'}
            height={60}
            width={180}
           
          
            objectFit={'auto'}
            src={"https://mbbs.org.pk/wp-content/uploads/2021/12/Human-Anatomy-by-B-D-Chaurasias-Volume-1-Eight-Edition-1.jpg"}
            alt="#"
          />

            </HStack>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₹
              </Text>
              <Text fontSize="2xl" fontWeight="900">
                3279
              </Text>
              <Text fontSize="1xl" color="gray.500" textDecoration={'line-through'}>
                2135
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
              Physiology by Sembulingum
              </Text>
              <HStack justifyContent={'center'} py={4}>
            <Image
            rounded={'lg'}
            height={60}
            width={180}
            
            objectFit={'cover'}
            src={"https://1.bp.blogspot.com/-ehTqNgHbGXU/YROmK-eP-3I/AAAAAAAADm4/DT7uErPm6NQY07hlM15swjXw526VjrLBQCLcBGAsYHQ/s2048/sembu%2Bphysio.jpg"}
            alt="#"
          />

            </HStack>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  ₹
                </Text>
                <Text fontSize="2xl" fontWeight="900">
                  2149
                </Text>
                <Text fontSize="1xl" color="gray.500" textDecoration={'line-through'}>
                  3220
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
            Anatomy by Chaurasia
            </Text>
            <HStack justifyContent={'center'} py={4}>
            <Image
            rounded={'lg'}
            height={60}
            width={180}
            
            objectFit={'cover'}
            src={"https://mbbs.org.pk/wp-content/uploads/2021/12/Human-Anatomy-by-B-D-Chaurasias-Volume-1-Eight-Edition-1.jpg"}
            alt="#"
          />

            </HStack>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                ₹
              </Text>
              <Text fontSize="2xl" fontWeight="900">
                3279
              </Text>
              <Text fontSize="1xl" color="gray.500" textDecoration={'line-through'}>
                2135
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
