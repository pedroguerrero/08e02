import { createStoreInDB, addPatientToDB, getPatientsFromDB } from './db';
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

  describe('addPatientToDB', () => {
    it('should add a patient to the database', async () => {
      const add = jest.fn();
      const db = { add };
      openDB.mockResolvedValue(db);

      const patient = { name: 'John Doe', age: 30 };
      await addPatientToDB(patient);

      expect(add).toHaveBeenCalledWith('citas', patient);
    });
  });

  describe('getPatientsFromDB', () => {
    it('should get all patient to the database', async () => {
      const getAll = jest.fn().mockResolvedValue([{ id: 1, name: 'sample' }]);
      const db = { getAll };
      openDB.mockResolvedValue(db);

      const patient = { name: 'John Doe', age: 30 };
      const response = await getPatientsFromDB(patient);

      expect(getAll).toHaveBeenCalledWith('citas');
      expect(response).toEqual([{ id: 1, name: 'sample' }]);
    });
  });
});
