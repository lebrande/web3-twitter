import { useAuthorTweetsEventsQuery } from "@/hooks/useAuthorTweetsEventsQuery"
import { parseMaybeTweets } from "@/utils/parseMaybeTweets";
import { Address } from "viem";

interface Args {
  authorAddress: Address;
}

export const useAuthorTweets = ({
  authorAddress,
}: Args) => {
  const { data: authorTweetsEventsData } = useAuthorTweetsEventsQuery({
    authorAddress,
  })

  if (authorTweetsEventsData === undefined) {
    return undefined;
  }

  const maybeTweets = authorTweetsEventsData.map(({ args }) => args);

  return parseMaybeTweets(maybeTweets);
}