'use client'

import { HStack, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from '@chakra-ui/next-js'

export const Navbar = () => {
  return (
    <HStack justify="space-between" p="1rem">
      <Link href='/'>
        <Heading as="h1" size="sm" noOfLines={1}>
          Web3 Twitter
        </Heading>
      </Link>
      <ConnectButton />
    </HStack>
  );
};