import React from 'react'
import "./Tabs.css";

import { Button, Stack} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

const Tabs = () => {
  return (
    <div className='bg'>
        
        <Button colorScheme='purple' size="md" >New Arrivals</Button>
        <Button colorScheme='blue' size="md" >MBBS</Button>
        <Button colorScheme='purple' size="md" >Post Graduation</Button>
        <Button colorScheme='blue' size="md" >Super Speciality</Button>
        <Button colorScheme='purple' size="md" >Medical College</Button>
        <Button colorScheme='blue' size="md" >Courses</Button>
        <Button colorScheme='purple' size="md" >Know Your College</Button>
       
        {/* <SearchIcon color="white" spacing={7}/> */}
      
    </div>
  )
}

export default Tabs