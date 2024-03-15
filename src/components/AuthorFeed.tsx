import { TweetPost } from "@/components/TweetPost";
import { useAuthorTweets } from "@/hooks/useAuthorTweets";
import { VStack } from "@chakra-ui/react";
import { Address } from "viem";

interface Props {
  authorAddress: Address;
}

export const AuthorFeed = ({
  authorAddress,
}: Props) => {
  const tweets = useAuthorTweets({ authorAddress });

  return (
    <VStack alignItems="stretch" gap="1rem">
      {tweets?.map((tweetData) => {
        return <TweetPost key={tweetData.id} tweetData={tweetData} />
      })}
    </VStack>
  );
};