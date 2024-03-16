import { TWITTER_ABI, TWITTER_ADDRESS } from "@/contracts/twiiter";
import { Button } from "@chakra-ui/react";
import { Address } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";

interface Props {
  authorAddress: Address;
}

export const FollowAuthorButton = ({
  authorAddress,
}: Props) => {
  const { address: accountAddress } = useAccount();
  const { data: isFollowed } = useReadContract({
    address: TWITTER_ADDRESS,
    abi: TWITTER_ABI,
    functionName: 'getFollowingStatus',
    args: [accountAddress!, authorAddress],
    query: {
      enabled: accountAddress !== undefined,
    }
  });

  const { writeContract } = useWriteContract();

  const follow = () => {
    writeContract({
      address: TWITTER_ADDRESS,
      abi: TWITTER_ABI,
      functionName: 'follow',
      args: [authorAddress],
    });
  }
  const unfollow = () => {
    writeContract({
      address: TWITTER_ADDRESS,
      abi: TWITTER_ABI,
      functionName: 'unfollow',
      args: [authorAddress],
    });
  }

  const isLoading = isFollowed === undefined;

  if (isLoading) {
    return (
      <Button colorScheme="blue" isLoading>
        Follow me
      </Button>
    );
  }

  if (isFollowed) {
    return (
      <Button colorScheme="red" onClick={unfollow}>
        Unfollow me
      </Button>
    );  
  }

  return (
    <Button colorScheme="blue" onClick={follow}>
      Follow me
    </Button>
  );
};