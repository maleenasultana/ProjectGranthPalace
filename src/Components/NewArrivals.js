import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const NewArrivals = () => {
  return (
    <Container maxW="5xl" mt={12}>
      <Heading as="h2" size="lg" mb={6}>
        New Arrivals
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        {/* Example card */}
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          position="relative"
          _hover={{ transform: 'scale(1.05)' }}
          transition="transform 0.3s ease"
        >
          <Box position="absolute" top={2} right={2} bg="blue.500" px={2} py={1} borderRadius="md">
            <Text color="white" fontWeight="bold">
              New
            </Text>
          </Box>
          <Box p={4}>
            <Heading as="h3" size="md" mb={2}>
              Medical Book Title
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Author Name
            </Text>
            <Text fontSize="sm" mt={2}>
              Description of the book goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Box>
        </Box>
        {/* Add more cards here */}
      </Flex>
    </Container>
  );
};

export default NewArrivals;
