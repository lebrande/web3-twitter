import { TWITTER_ABI, TWITTER_ADDRESS } from "@/contracts/twiiter";
import { Button, Card, CardBody, FormControl, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useWriteContract } from "wagmi";

export const PostTweetForm = () => {
  const [tweetContent, setTweetContent] = useState<string>('');

  const { writeContractAsync } = useWriteContract();

  const postTweet = () => {
    writeContractAsync({
      address: TWITTER_ADDRESS,
      abi: TWITTER_ABI,
      functionName: 'tweet',
      args: [tweetContent],
    });
  };

  return (
    <Card>
      <CardBody>
        <VStack gap="1rem">
          <FormControl>
            <Textarea
              value={tweetContent}
              onChange={({ target }) => setTweetContent(target.value)}
              placeholder="Tweet something..."
            />
          </FormControl>
          <Button
            onClick={postTweet}
            width="100%"
            colorScheme="blue"
          >
            Post
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};