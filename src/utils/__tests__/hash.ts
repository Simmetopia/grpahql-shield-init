import { compareHash, saltAndHash } from '../hash';

describe('Hashing tests', () => {
  const testString = 'this is a test string _ this is a test user';

  describe('Hashing tests', () => {
    test('When given a string and id, should return hash and salt', async () => {
      await expect(saltAndHash(testString)).resolves.toEqual(expect.any(String));
    });

    test('When two equal values is hashed, they are different', async () => {
      const rootHash = await saltAndHash(testString);
      const hashToCompare = await saltAndHash(testString);
      expect(rootHash).not.toEqual(hashToCompare);
    });
  });
  describe('Comparing tests', () => {
    let hashy: string;
    let testValueCorrect: string;
    let testValueWrongValue: string;
    beforeAll(async () => {
      hashy = await saltAndHash(testString);
      testValueCorrect = testString;
      testValueWrongValue = 'wrong string';
    });
    test('When same salt and string, compare returns true', async () => {
      await expect(compareHash(hashy, testValueCorrect)).resolves.toBeTruthy();
    });
    test('When salt is right but string is wrong, compare returns false', async () => {
      await expect(compareHash(hashy, testValueWrongValue)).resolves.toBeFalsy();
    });
  });
});
