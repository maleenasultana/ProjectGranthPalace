import { SimpleGrid } from '@chakra-ui/react';
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
   
    <Text>
 NewArrivals
    </Text>
   <SimpleGrid columns={3} spacing={"10px"}>
    <BookCard/>
    <BookCard/>
    <BookCard/>
   </SimpleGrid> 
   </>
  );
}
