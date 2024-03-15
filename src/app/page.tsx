'use client'

import { PostTweetForm } from "@/components/PostTweetForm"
import { TweetsFeed } from "@/components/TweetsFeed"
import { Heading } from "@chakra-ui/react"

function App() {
  return (
    <>
      <PostTweetForm />
      <Heading as="h2" size="lg">
        Recent tweets
      </Heading>
      <TweetsFeed />
    </>
  )
}

export default App
