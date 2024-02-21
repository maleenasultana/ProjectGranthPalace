import React from 'react'
import "./Tabs.css";

import { Button, Stack} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

const Tabs = () => {
  return (
    <div className='bg'>
        
        <Button mx={2} colorScheme='purple' size="md" >New Arrivals</Button> 
        <Button mx={1} px={6} colorScheme='blue' size="md" >MBBS</Button>
        <Button mx={1}colorScheme='purple' size="md" >Post Graduation</Button>
        <Button mx={1} colorScheme='blue' size="md" >Super Speciality</Button>
        <Button mx={1} colorScheme='purple' size="md" >Medical College</Button>
        <Button mx={1} px={6} colorScheme='blue' size="md" >Courses</Button>
        <Button mx={1} colorScheme='purple' size="md" >Know Your College</Button>
        <Button mx={1} colorScheme='purple' size="md" >News and Updates</Button>
        <Button mx={1} px={6} colorScheme='purple' size="md" >contact</Button>
        {/* <SearchIcon color="white" spacing={7}/> */}
      
    </div>
  )
}

export default Tabs