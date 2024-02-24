import React from 'react';
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const options = [
  { id: 1, desc: 'Detailed' },
  { id: 2, desc: ' Best Paper Quality .' },
  { id: 3, desc: 'Simplified' },
];

const PackageTier = ({ title, options, typePlan, checked = false }) => {
  const colorTextLight = checked ? 'white' : 'purple.600';
  const bgColorLight = checked ? 'purple.400' : 'gray.300';

  const colorTextDark = checked ? 'white' : 'purple.500';
  const bgColorDark = checked ? 'purple.400' : 'gray.300';

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: 'flex-start',
        md: 'space-around',
      }}
      direction={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{ md: 'center' }}
    >
      <Heading size={'md'}>{title}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading size={'xl'}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
         Add to Cart
        </Button>
      </Stack>
    </Stack>
  );
};

const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack
          p={5}
          alignItems={'center'}
          justifyContent={{
            base: 'flex-start',
            md: 'space-around',
          }}
          direction={{
            base: 'column',
            md: 'row',
          }}
        >
          <Stack
            width={{
              base: '100%',
              md: '40%',
            }}
            textAlign={'center'}
          >
            <Heading size={'lg'}>
           Books for <Text color="purple.400">Post Graduation</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
            Books For Celebrating Life's Important Milestones.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Nursing '} typePlan="₹1260.00" options={options} />
        <Divider />
        <PackageTier
          title={'PG/Pathology'}
          checked={true}
          typePlan="₹3370.00"
          options={options}
        />
        <Divider />
        <PackageTier title={'MSc Entrance'} typePlan="₹1050.00" options={options} />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
