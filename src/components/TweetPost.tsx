import { TweetData } from "@/types";
import { Card, Text } from "@chakra-ui/react";

interface Props {
  tweetData: TweetData;
}

export const TweetPost = ({ tweetData }: Props) => {
  return (
    <Card p="1rem" gap="1rem">
      <Text>author: {tweetData.author}</Text>
      <Text>tweet content: {tweetData.content}</Text>
      <Text>date: {tweetData.createdAt.toString()}</Text>
    </Card>
  );
};