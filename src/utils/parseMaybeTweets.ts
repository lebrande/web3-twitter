import { TweetData } from "@/types";

export const parseMaybeTweets = (maybeTweets: Partial<TweetData>[]): TweetData[] => {
  return maybeTweets
    .map(parseMaybeTweet)
    .filter((tweet): tweet is TweetData => Boolean(tweet));
}

const parseMaybeTweet = ({
  author,
  content,
  createdAt,
  id,
}: Partial<TweetData>): TweetData | undefined => {
  if (
    author === undefined
    || content === undefined
    || createdAt === undefined
    || id === undefined
  ) {
    return undefined;
  }

  return {
    author,
    content,
    createdAt,
    id,
  }
}