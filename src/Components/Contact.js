import { Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, Wrap, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, AtSignIcon,AddIcon} from '@chakra-ui/icons';
import { AiOutlineUser } from "react-icons/ai";

export default function Contact() {
  return (
    <>
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden" m={1} p={1}>
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 3, md: 16, lg: 10 }}
          p={{ sm: 7, md: 5, lg: 16 }}>
          <Box p={1}>
            <Wrap spacing={{ base: 22, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading mx={8}>Contact Us</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500" textAlign={'center'}>
                    Fill up the form below to contact us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems={{base:"flex-start", sm:"center"}}>
                      <Button
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<PhoneIcon color="#1970F1" size="20px" />}>
                       +919130448884
                      </Button>
                      <Button
                       marginLeft={9}
                        size="md"
                        height="48px"
                        width="220px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<EmailIcon color="#1970F1" size="20px" />}>
                        granthapalace@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<AtSignIcon color="#1970F1" size="20px" />}>
                        Mumbai, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={4}
                    alignItems="flex-start">
                {/* bottom icons come here if want */}
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel color={'gray.400'}>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                          <AiOutlineUser color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel color={'gray.400'}>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <EmailIcon color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel color={'gray.400'}>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{
                          bgColor:'#02054B'
                        }}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
    <Box  data-wow-delay="0.5s">
                    <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1886.4617916421316!2d72.81205898218658!3d18.97898195617913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU4JzQ0LjAiTiA3MsKwNDgnNDguMCJF!5e0!3m2!1sen!2sin!4v1708698887707!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </Box>
    </>
  );
}


/**
 *  <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
                    <iframe className="w-100 h-100"
                    src=""
                    frameborder="0" style={{"min-height": "300px", "border":"0"}} allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
                </div>
 */