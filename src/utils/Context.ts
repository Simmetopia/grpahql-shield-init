import { decode, verify } from 'jsonwebtoken';
import { tokenSecret } from './configHelper';

export interface Context {
  user?: any;
  verified: boolean;
}
export const createContext = async (request: any): Promise<Context> => {
  const token = request.headers.authorization || '';

  try {
    verify(extractTokenFromHeader(token), tokenSecret());
    /* Get user data from token or fetch from database  */
    const decodedToken = decode(token) || { sub: '' };
    return {
      verified: true,
    };
  } catch (error) {
    return {
      verified: false,
    };
  }
};

const extractTokenFromHeader = (authHeader: string) => {
  const headerString = authHeader.split(' ');
  if (headerString.length === 1) {
    return headerString[0];
  }
  return headerString[1];
};
