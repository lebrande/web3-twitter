import { AuthorLabel } from "@/components/AuthorLabel";
import { Button, Card, CardBody, HStack } from "@chakra-ui/react";
import { Address } from "viem";

interface Props {
  authorAddress: Address;
}

export const AuthorCard = ({
  authorAddress,
}: Props) => {
  return (
    <Card>
      <CardBody>
        <HStack justifyContent="space-between">
          <AuthorLabel authorAddress={authorAddress} />
          <Button colorScheme="blue">
            Follow me
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};