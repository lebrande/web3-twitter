import { Address } from "viem";

export const TWITTER_ADDRESS: Address = '0xcAB93CFF5786465850f8CAD4140B26B0CEb90Bad';
export const TWITTER_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "following",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "followed",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFollowing",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "FollowingChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
    ],
    name: "TweetSent",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_TWEET_STRING_LENGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_TWEET_STRING_LENGHT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "followed",
        type: "address",
      },
    ],
    name: "follow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "getFollowersCount",
    outputs: [
      {
        internalType: "uint256",
        name: "_followersCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "following",
        type: "address",
      },
      {
        internalType: "address",
        name: "followed",
        type: "address",
      },
    ],
    name: "getFollowingStatus",
    outputs: [
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "getFollowingsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "_followingsCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextTweetId",
    outputs: [
      {
        internalType: "uint256",
        name: "_nextTweetId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tweetId",
        type: "uint256",
      },
    ],
    name: "getTweet",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
        ],
        internalType: "struct YourContract.Tweet",
        name: "_tweet",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "getTweetsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "_tweetsCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "tweet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "unfollowed",
        type: "address",
      },
    ],
    name: "unfollow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;