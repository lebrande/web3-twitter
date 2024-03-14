import { Address } from "viem";

export interface TweetData {
    id: bigint;
    author: Address;
    content: string;
    createdAt: bigint;
}