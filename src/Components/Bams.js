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
  { id: 2, desc: 'available' },
  { id: 3, desc: '4-7 days dispatch' },
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
       Buy Now
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
           Books for <Text color="purple.400">BAMS</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: '100%',
              md: '60%',
            }}
          >
            <Text textAlign={'center'}>
            BAMS stands for Bachelor of Ayurvedic, Medicine and Surgery, which offers candidates with the skills and knowledge in Ayurveda as well as ayurvedic medicine. 
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier title={'Susruta Samhita'} typePlan="₹538.00" options={options} />
        <Divider />
        <PackageTier
          title={'Ayurvedia Ras Shastra '}
          checked={true}
          typePlan="₹296.00"
          options={options}
        />
        <Divider />
        <PackageTier title={'Question Papers for BAMS'} typePlan="₹487.00" options={options} />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
