'use client'

import { PostTweetForm } from "@/components/PostTweetForm"
import { Container, VStack } from "@chakra-ui/react"

function App() {
  return (
    <Container maxW="md">
      <VStack alignItems="stretch">
        <PostTweetForm />
      </VStack>
    </Container>
  )
}

export default App
