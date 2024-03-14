import { getTweets } from "@/utils/getTweets";
import { useQuery } from "@tanstack/react-query";
import { useClient } from "wagmi";

export const useTweetsEventsQuery = () => {
  const client = useClient();

  const result = useQuery({
    queryKey: ['useTweetsEventsQuery'],
    queryFn: async () => {
      if (client === undefined) {
        throw new Error('client is undefined');
      } 

      return getTweets({ client });
    },
    enabled: client !== undefined,
  });

  return result;
}