import { TWITTER_ABI, TWITTER_ADDRESS } from "@/contracts/twiiter";
import { INITIAL_BLOCK_NUMBER } from "@/utils/constants";
import { Client } from "viem"
import { createContractEventFilter, getFilterLogs } from "viem/actions";

interface Args {
  client: Client;
}

export const getTweets = async ({
  client,
}: Args) => {
  const filter = await createContractEventFilter(client, { 
    address: TWITTER_ADDRESS,
    abi: TWITTER_ABI,
    eventName: 'TweetSent',
    fromBlock: INITIAL_BLOCK_NUMBER,
  })
  const logs = await getFilterLogs(client, { filter });

  return logs;
}