import { Card, CardBody, Stat, StatLabel, StatNumber } from "@chakra-ui/react";

interface Props {
  label: string;
  statNumber: string;
}

export const AuthorStatCard = ({
  label,
  statNumber,
}: Props) => {
  return (
    <Card>
      <CardBody>
        <Stat>
          <StatLabel>{label}</StatLabel>
          <StatNumber>{statNumber}</StatNumber>
        </Stat>
      </CardBody>
    </Card>
  );
};