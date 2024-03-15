import { Address, isAddress } from "viem";

export const sanitizeAddress = (maybeAddres: unknown): Address | undefined => {
  if (typeof maybeAddres === 'string' && isAddress(maybeAddres)) {
    return maybeAddres;
  }

  return undefined;
}