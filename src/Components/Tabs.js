import React from 'react'
import "./Tabs.css";
import Books from "../Components/Books" 

import {Box} from '@chakra-ui/react'


const Tabs = () => {
  return (
    <Box className='bg' direction ={{base: 'row', sm:'column'}} px={4}>
        <a href="/newarrivals" className='link'>NewArrivals</a>
        <a href="/books"  className='link'>MBBS</a>
        <a href="/postgraduation"  className='link'>Post Graduation</a>
        <a href='/SS'  className='link'>Super Speciality</a>
        <a href="/medicalcollege"  className='link'>Medical College</a>
        <a href="/courses"  className='link'>Courses</a>
        <a href="/bds"  className='link'>BDS</a>
        <a href="/bams"  className='link'>BAMS</a>
        <a href="/knowyourcollege"  className='link'>Know Your College</a>

        {/* <Button mx={2} colorScheme='purple' size="md" >New Arrivals</Button> 
        <Button mx={1} px={6} colorScheme='purple' size="md" >MBBS</Button>
        <Button mx={1}colorScheme='purple' size="md" >Post Graduation</Button>
        <Button mx={1} colorScheme='purple' size="md" >Super Speciality</Button>
        <Button mx={1} colorScheme='purple' size="md" >Medical College</Button>
        <Button mx={1} px={6} colorScheme='purple' size="md" >Courses</Button>
        <Button mx={1} colorScheme='purple' size="md" >BDS</Button>
        <Button mx={1} colorScheme='purple' size="md" >BAMS</Button>
        <Button mx={1} px={6} colorScheme='purple' size="md" >Know Your College</Button>
        */}
      
    </Box>
  )
}

export default Tabs