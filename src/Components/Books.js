import { SimpleGrid,Text } from '@chakra-ui/react';
import BookCard from '../../src/Components/BookCard';
import React from 'react';

export default function Books() {
  return (
    // <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    //   {[...Array(10)].map((_, index) => (
    //     <BookCard key={index} />
    //   ))}
    // </div>
    <>
   
    <Text textAlign={'center'} fontSize={{base: '2xl', sm:'4xl'}} fontWeight={'bold'} color={'gray.600'}>
        NewArrivals
    </Text>
   <SimpleGrid columns={{base: 1, sm:3}} spacing={"2px"}>
    <BookCard/>
    <BookCard/>
    <BookCard/>
   </SimpleGrid> 
   <SimpleGrid columns={{base: 1, sm:3}} spacing={"2px"}>
    <BookCard/>
    <BookCard/>
    <BookCard/>
   </SimpleGrid> 
   </>
  );
}
