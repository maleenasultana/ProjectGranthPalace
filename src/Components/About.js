import React from 'react'
import { Box,Heading } from '@chakra-ui/react'

const About = () => {
  return (
    <Box py={3}>
       <Heading bgColor={'Highlight'} fontFamily={'body'} fontWeight={700} fontSize={{base: 'lg',sm: 'xl' }} textAlign={'center'}>
          Granthapalace is an online bookstore dedicated to providing 
          the best selection of books for various fields. We also offer 
          eLearning facilities for students, employees, and teachers to enhance
           their knowledge and skills.
          </Heading>
        

        </Box>
  )
}

export default About