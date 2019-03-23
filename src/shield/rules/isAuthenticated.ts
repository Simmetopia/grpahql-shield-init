import { rule } from 'graphql-shield';
import { Context } from '../../utils/Context';

export const isAuthenticated = rule()(async (_, __, ctx: Context, ___) => {
  return !!ctx.user;
});
