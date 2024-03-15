import { shortenAddress } from "@/utils/shortenAddress";
import { Avatar, HStack, WrapItem } from "@chakra-ui/react";
import { Address } from "viem";
import { Link } from '@chakra-ui/next-js'

interface Props {
  authorAddress: Address;
}

export const AuthorLabel = ({
  authorAddress,
}: Props) => {
  return (
    <HStack>
      <WrapItem>
        <Avatar name={authorAddress} size="xs" />
      </WrapItem>
      <Link fontSize="xs" href={`/author/${authorAddress}`}>
        {shortenAddress(authorAddress)}
      </Link>
    </HStack>
  );
};