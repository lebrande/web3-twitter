import { AuthorLabel } from "@/components/AuthorLabel";
import { FollowAuthorButton } from "@/components/FollowAuthorButton";
import { Card, CardBody, HStack } from "@chakra-ui/react";
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
          <FollowAuthorButton authorAddress={authorAddress} />
        </HStack>
      </CardBody>
    </Card>
  );
};