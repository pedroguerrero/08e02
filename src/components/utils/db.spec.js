import { createStoreInDB } from './db';
import { openDB } from 'idb';

jest.mock('idb');

describe('db', () => {
  describe('createStoreInDB', () => {
    it('should create a new object store if it does not exist', async () => {
      const createObjectStore = jest.fn();
      const contains = jest.fn().mockReturnValue(false);
      const db = {
        objectStoreNames: { contains },
        createObjectStore,
      };
      openDB.mockImplementation((...args) => {
        const [, , config] = args;

        config.upgrade(db);

        return {};
      });

      await createStoreInDB();

      expect(openDB).toHaveBeenCalledWith('vidaPlena', 1, expect.anything());
      expect(contains).toHaveBeenCalledWith('citas');
      expect(createObjectStore).toHaveBeenCalledWith('citas', {
        keyPath: 'id',
        autoIncrement: true,
      });
    });
  });
});
