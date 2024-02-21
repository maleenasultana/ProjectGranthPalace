import React,{ useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FcAssistant, FcCollaboration, FcGlobe, FcUndo,  FcManager,FcPrivacy } from 'react-icons/fc';

const Card = ({ heading, description, icon, href }) => {
  return (
    React.createElement(Box, {
      maxW: {
        base: 'full',
        md: '275px'
      },
      w: 'full',
      borderWidth: "2px",
      boxShadow:"lg",
      shadowColor:"gray",
      borderRadius: "lg",
      overflow: "hidden",
      p: 5,
      _hover:{
        textDecoration: 'none',
        bg: useColorModeValue('gray.300', 'gray.400'),
        transform: 'scale(1.05)',
      },
    }, React.createElement(Stack, {
      align: 'start',
      spacing: 2
    }, React.createElement(Flex, {
      w: 16,
      h: 16,
      align: 'center',
      justify: 'center',
      color: 'white',
      rounded: 'full',
      bg: useColorModeValue('gray.100', 'gray.700')
    }, icon), React.createElement(Box, {
      mt: 2
    }, React.createElement(Heading, {
      size: "md"
    }, heading), React.createElement(Text, {
      mt: 1,
      fontSize: 'sm'
    }, description)), React.createElement(Button, {
      variant: 'link',
      colorScheme: 'blue',
      size: 'sm',
      href: href
    }, "Learn more")))
  );
};

export default function gridListWith() {
  return (
    React.createElement(Box, {
      p: 4
    }, React.createElement(Stack, {
      spacing: 4,
      as: Container,
      maxW: '3xl',
      textAlign: 'center',
    }, React.createElement(Heading, {
      fontSize: {
        base: '2xl',
        sm: '4xl'
      },
      fontWeight: 'bold'
    }, "Buy Online Medical Books At Best Prices!"), React.createElement(Text, {
      color: 'gray.600',
      fontSize: {
        base: 'sm',
        sm: 'lg'
      }
    }, "Discover a seamless and secure way to purchase medical books online at competitive prices. Explore our extensive collection featuring the latest editions of original products, ensuring both convenience and safety throughout your shopping experience.")), React.createElement(Container, {
      maxW: '5xl',
      mt: 12
    }, React.createElement(Flex, {
      flexWrap: "wrap",
      gridGap: 6,
      justify: "center"
    }, React.createElement(Card, {
      heading: 'Best CRM',
      icon: React.createElement(Icon, {
        as: FcAssistant,
        w: 10,
        h: 10
      }),
      description: '24 hour Customer Support',
      href: '#'
    }), React.createElement(Card, {
      heading: '100% Authentic',
      icon: React.createElement(Icon, {
        as: FcCollaboration,
        w: 10,
        h: 10
      }),
      description: '100% Authentic Website and Buyer Protection',
      href: '#'
    }), React.createElement(Card, {
      heading: 'Safe and Secure',
      icon: React.createElement(Icon, {
        as: FcPrivacy,
        w: 10,
        h: 10
      }),
      description: '100% Safe And Secure Payment Options',
      href: '#'
    }), React.createElement(Card, {
      heading: 'Easy Replacement',
      icon: React.createElement(Icon, {
        as: FcUndo,
        w: 10,
        h: 10
      }),
      description: 'Free and Easy Replacement of Defective Books',
      href: '#'
    }),
    React.createElement(Card, {
        heading: 'Easy Tracking',
        icon: React.createElement(Icon, {
          as: FcGlobe,
          w: 10,
          h: 10
        }),
        description: 'Easy to Track Your Order From Given Link ',
        href: '#'
      }), React.createElement(Card, {
      heading: 'Best Price & Latest Edition',
      icon: React.createElement(Icon, {
        as: FcManager,
        w: 10,
        h: 10
      }),
      description: '100% Original Product at Best Price',
      href: '#'
    }))))
  );
}
