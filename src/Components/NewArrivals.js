import { SimpleGrid,Text,Button, Stack } from '@chakra-ui/react';
import BookCard from './BookCard';
import React from 'react';

export default function Books() {
  return (
    // <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    //   {[...Array(10)].map((_, index) => (
    //     <BookCard key={index} />
    //   ))}
    // </div>
    <>
   
    <Text textAlign={'center'} mt={10} fontSize={{base: '2xl', sm:'4xl'}} fontWeight={'bold'} color={'gray.600'}>
      MBBS Books
    </Text>
   <SimpleGrid columns={{base: 1, sm:3}} spacing={"2px"}>
    <BookCard/>
    <BookCard/>
    <BookCard/>
   </SimpleGrid> 
   {/* <SimpleGrid columns={{base: 1, sm:3}} spacing={"2px"}>
    <BookCard/>
    <BookCard/>
    <BookCard/>
   </SimpleGrid>  */}
    
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
   </>
  );
}
