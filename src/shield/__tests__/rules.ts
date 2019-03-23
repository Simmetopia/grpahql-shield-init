import schema from '../../types/index';
import { permissionObject } from '../permissions';

describe('resolverObject should contain rules for all but auth resolvers', () => {
  const resolverObjectStructureQuery = {};
  const resolverObjectStructureMutation = {};
  beforeAll(() => {
    const queryKeys = Object.keys(schema.resolvers.Query);
    const mutationKeys = Object.keys(schema.resolvers.Mutation);
    queryKeys.forEach((e) => {
      // @ts-ignore
      resolverObjectStructureQuery[e] = expect.anything();
    });
    mutationKeys.forEach((e) => {
      // @ts-ignore
      resolverObjectStructureMutation[e] = expect.anything();
    });
  });
  test('containers query rules', () => {
    expect(permissionObject.Query).toMatchObject(expect.objectContaining({ ...resolverObjectStructureQuery }));
  });
  test('containers mutation rules', () => {
    expect(permissionObject.Mutation).toMatchObject(expect.objectContaining({ ...resolverObjectStructureMutation }));
  });
});
