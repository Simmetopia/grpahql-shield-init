import { rule } from 'graphql-shield';

import { Context } from '../../utils/Context';
export const enum Roles {
  ADMINISTRATOR,
  USER,
}
export const isAdmin = rule()(async (_, __, ctx: Context, ___) => {
  if (!ctx.user) {
    return false;
  }
  return !!ctx.user.roles.find((i: Roles) => i === Roles.ADMINISTRATOR);
});
