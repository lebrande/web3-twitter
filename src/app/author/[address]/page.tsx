'use client'

import { AuthorCard } from "@/components/AuthorCard"
import { AuthorFeed } from "@/components/AuthorFeed";
import { AuthorStatCard } from "@/components/AuthorStatCard";
import { TWITTER_ABI, TWITTER_ADDRESS } from "@/contracts/twiiter";
import { sanitizeAddress } from "@/utils/sanitizeAddress";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useReadContract } from "wagmi";

interface Props {
  params: {
    address: unknown;
  }
}

function Page({ params }: Props) {
  const authorAddress = sanitizeAddress(params.address);

  const { data: followersCount } = useReadContract({
    address: TWITTER_ADDRESS,
    abi: TWITTER_ABI,
    functionName: 'getFollowersCount',
    args: [authorAddress!],
    query: {
      enabled: authorAddress !== undefined,
    },
  });
  const { data: followingsCount } = useReadContract({
    address: TWITTER_ADDRESS,
    abi: TWITTER_ABI,
    functionName: 'getFollowingsCount',
    args: [authorAddress!],
    query: {
      enabled: authorAddress !== undefined,
    },
  });
  const { data: tweetsCount } = useReadContract({
    address: TWITTER_ADDRESS,
    abi: TWITTER_ABI,
    functionName: 'getTweetsCount',
    args: [authorAddress!],
    query: {
      enabled: authorAddress !== undefined,
    },
  });

  if (authorAddress === undefined) {
    return (
      <Text>
        The address is incorrect.
      </Text>
    );
  }

  return (
    <>
      <Heading as="h2" size="lg">
        About the author
      </Heading>

      <AuthorCard authorAddress={authorAddress} />

      <SimpleGrid columns={2} spacing={4}>
        <AuthorStatCard label="Followers" statNumber={followersCount?.toString() || '0'} />
        <AuthorStatCard label="Followings" statNumber={followingsCount?.toString() || '0'} />
        <AuthorStatCard label="Tweets count" statNumber={tweetsCount?.toString() || '0'} />
        <AuthorStatCard label="First tweet" statNumber="---" />
      </SimpleGrid>

      <Heading as="h3" size="lg">
        Author's recent tweets
      </Heading>

      <AuthorFeed authorAddress={authorAddress} />
    </>
  )
}

export default Page;
