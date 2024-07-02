import { db } from '../config/firebaseConfig';

const userCollection = db.collection('USERS');

export { userCollection };

