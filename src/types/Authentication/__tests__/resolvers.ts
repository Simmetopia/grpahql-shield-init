import * as jwt from 'jsonwebtoken';
import { Context } from '../../../utils/Context';
import { saltAndHash } from '../../../utils/hash';
import { login, signup } from '../resolvers';
jest.mock('jsonwebtoken');
jest.mock('../../../utils/Context');

describe('Authenticantion resolver tests', () => {
  beforeAll(async () => {
    /* Implement clean test setup here  */
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('Login', () => {
    test('When loggin in with correct credentials, should return auth token', async () => {
      throw new Error('no implemented');
      expect(false).toBeTruthy();
    });

    test('When loggin in with wrong credentials, should return auth token', async () => {
      throw new Error('no implemented');
      expect(false).toBeTruthy();
    });
    describe('Signup', () => {
      test('When signing up, if invited, should return token', async () => {
        throw new Error('no implemented');
        expect(false).toBeTruthy();
      });
      test('When signing up, if admin, should return token with admin priviledges', async () => {
        throw new Error('no implemented');
        expect(false).toBeTruthy();
      });
      test('When signing up, if user is invited, should return token with user priviledges', async () => {
        throw new Error('no implemented');
        expect(false).toBeTruthy();
      });

      test('When signing up, if user is invited, should delete invite', async () => {
        throw new Error('no implemented');
        expect(false).toBeTruthy();
      });
      test('When signing up, if not admin, and not invited, should throw error', async () => {
        throw new Error('no implemented');
        expect(false).toBeTruthy();
      });
    });
  });
});
