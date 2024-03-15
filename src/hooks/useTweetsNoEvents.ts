import { TWITTER_ABI, TWITTER_ADDRESS } from "@/contracts/twiiter";
import { TweetData } from "@/types";
import { useReadContract, useReadContracts } from "wagmi"

const MAX_TWEETS_COUNT = 10;

export const useTweetsNoEvents = () => {
  const { data: nextTweetId } = useReadContract({
    address: TWITTER_ADDRESS,
    abi: TWITTER_ABI,
    functionName: 'getNextTweetId',
  });

  const tweetIds = getTweetsIds(nextTweetId);

  const { data: tweetsData } = useReadContracts({
    contracts: tweetIds.map((tweetId) => {
      return {
        address: TWITTER_ADDRESS,
        abi: TWITTER_ABI,
        functionName: 'getTweet',
        args: [tweetId],
      };
    }),
    query: {
      enabled: tweetIds.length > 0,
    },
  });

  return tweetsData?.map(({ result }) => {
    return result as unknown as TweetData;
  });
}

const getTweetsIds = (nextTweetId: bigint | undefined): bigint[] => {
  if (nextTweetId === undefined || nextTweetId === 0n) {
    return [];
  }

  const lastTweetId = Number(nextTweetId) - 1;
  const firstTweetId = lastTweetId - MAX_TWEETS_COUNT;
  const firstTweetIdCapped = firstTweetId < 0 ? 0 : firstTweetId;

  const tweetsIds = [];

  for (let i = lastTweetId; i > firstTweetIdCapped; i--) {
    tweetsIds.push(BigInt(i));
  }

  return tweetsIds;  
}