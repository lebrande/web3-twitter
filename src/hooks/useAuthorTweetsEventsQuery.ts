import { getTweets } from "@/utils/getTweets";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { useClient } from "wagmi";

interface Args {
  authorAddress: Address;
}

export const useAuthorTweetsEventsQuery = ({
  authorAddress,
}: Args) => {
  const client = useClient();

  const result = useQuery({
    queryKey: ['useAuthorTweetsEventsQuery', { authorAddress }],
    queryFn: async () => {
      if (client === undefined) {
        throw new Error('client is undefined');
      } 

      return getTweets({ client, authorAddress });
    },
    enabled: client !== undefined,
  });

  return result;
}