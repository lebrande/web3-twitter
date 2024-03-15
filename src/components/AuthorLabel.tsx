import { shortenAddress } from "@/utils/shortenAddress";
import { Avatar, HStack, Text, WrapItem } from "@chakra-ui/react";
import { Address } from "viem";

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
      <Text fontSize="xs">{shortenAddress(authorAddress)}</Text>
    </HStack>
  );
};