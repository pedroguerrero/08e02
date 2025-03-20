import { openDB } from 'idb';

export async function createStoreInDB() {
  const dbPromise = await openDB('vidaPlena', 1, {
    upgrade(db) {
      console.log('Creating a new object store...');

      if (!db.objectStoreNames.contains('citas')) {
        db.createObjectStore('citas', {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });

  return dbPromise;
}

export async function addPatientToDB(patient) {
  const db = await createStoreInDB();

  return await db.add('citas', patient);
}

export async function getPatientsFromDB() {
  const db = await createStoreInDB();

  return await db.getAll('citas');
}
