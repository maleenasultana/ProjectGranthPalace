import React from 'react'
import { Box,Heading } from '@chakra-ui/react'
import "../App.css"

const About = () => {
  return (
    <Box py={3}>
       <Heading className='about' color={'whitesmoke'} backgroundImage={'radial-gradient(#54b3d6,#250f72)'} fontFamily={'body'} padding={3} fontWeight={700} fontSize={{base: 'lg',sm: 'xl' }} textAlign={'center'}>
          <p>Granthapalace is an online bookstore dedicated to providing 
          the best selection of books for various fields. We also offer 
          eLearning facilities for students, employees, and teachers to enhance
           their knowledge and skills. Our curated selection ensures that there's something for everyone, catering to all groups, interests, and preferences.</p>
           <p>We provide a seamless online shopping experience. Our user-friendly platform allows customers to browse, purchase, and receive their favorite books with ease and convenience. With just a few clicks, you can have your next literary adventure delivered straight to your doorstep.</p>
           <p>Whether you're a seasoned bookworm or a casual reader, GranthPalace welcomes you to explore our virtual shelves and embark on a journey through the captivating world of literature. Join us at GranthPalace, where the best books await at prices that won't break the bank.</p>
          </Heading>
        

        </Box>
  )
}

export default About