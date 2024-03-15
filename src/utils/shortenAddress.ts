import { Address } from "viem";

export const shortenAddress = (address: Address) => {
  return address
    .slice(0, 6)
    .concat('...')
    .concat(address.slice(-4));
}