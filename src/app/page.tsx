'use client'

import { PostTweetForm } from "@/components/PostTweetForm"
import { TweetsFeed } from "@/components/TweetsFeed"
import { Container, Heading, VStack } from "@chakra-ui/react"

function App() {
  return (
    <Container maxW="md">
      <VStack alignItems="stretch" gap="2rem" my="2rem">
        <PostTweetForm />
        <Heading as="h2" size="lg">
          Recent tweets
        </Heading>
        <TweetsFeed />
      </VStack>
    </Container>
  )
}

export default App
