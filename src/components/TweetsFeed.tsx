import { TweetPost } from "@/components/TweetPost";
import { useTweets } from "@/hooks/useTweets";
import { VStack } from "@chakra-ui/react";

export const TweetsFeed = () => {
  const tweets = useTweets();

  return (
    <VStack alignItems="stretch" gap="1rem">
      {tweets?.map((tweetData) => {
        return <TweetPost key={tweetData.id} tweetData={tweetData} />
      })}
    </VStack>
  );
};