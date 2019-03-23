import { hash, verify } from 'argon2';

export const saltAndHash = (toHash: string) => {
  // argon2id = type:2
  return hash(toHash, { saltLength: 16, memoryCost: 2048, type: 2 });
};

export const compareHash = (hashToCompare: string, compareWith: string) => {
  return verify(hashToCompare, compareWith);
};
