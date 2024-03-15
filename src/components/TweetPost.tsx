import { AuthorLabel } from "@/components/AuthorLabel";
import { TweetData } from "@/types";
import { Card, Text } from "@chakra-ui/react";
import { formatDistanceToNow, fromUnixTime } from "date-fns";

interface Props {
  tweetData: TweetData;
}

export const TweetPost = ({ tweetData }: Props) => {
  const createdAtDate = fromUnixTime(Number(tweetData.createdAt));
  const createdAtFormatted = formatDistanceToNow(createdAtDate);

  return (
    <Card p="1rem" gap="1rem">
      <AuthorLabel authorAddress={tweetData.author} />
      <Text>{tweetData.content}</Text>
      <Text color="gray" fontSize="xs">Posted {createdAtFormatted} ago</Text>
    </Card>
  );
};