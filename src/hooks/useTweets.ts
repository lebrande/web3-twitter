import { useTweetsEventsQuery } from "@/hooks/useTweetsEventsQuery";
import { parseMaybeTweets } from "@/utils/parseMaybeTweets";

export const useTweets = () => {
  const { data: tweetsEventsData } = useTweetsEventsQuery();

  if (tweetsEventsData === undefined) {
    return undefined;
  }

  const maybeTweets = tweetsEventsData.map(({ args }) => args);

  return parseMaybeTweets(maybeTweets);
}